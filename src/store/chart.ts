import { createActions, createReducer } from 'reduxsauce'
import createCachedSelector from 're-reselect'
import { createSelector } from 'reselect'
import { values, flow, pluck, uniq, defaultTo, map, get } from 'lodash/fp'
import { ChartItemType, DataType } from '../types'
import { filterItems, groupItems, parseDate } from '../services/helpers'

export const mountPoint = 'chart'

const _apiData = 'apiData'
const _apiError = 'apiError'

const { Types: types, Creators: creators } = createActions(
  {
    setData: ['data'],
    setError: ['data'],
  },
  { prefix: mountPoint },
)

const initialState = {
  [_apiData]: null,
  [_apiError]: null,
}

type SliceType = typeof initialState

export type StateType = {
  chart: SliceType
}

const reducer = createReducer(initialState, {
  [types.SET_DATA]: (state: SliceType, { data }: any) => ({
    ...state,
    [_apiData]: data,
  }),
  [types.SET_ERROR]: (state: SliceType, { data }: any) => ({
    ...state,
    [_apiError]: data,
  }),
})

const selectState = (state: StateType) => state[mountPoint]

const makeSelectorFunction = (fieldName: string) =>
  flow([defaultTo([]), pluck(fieldName), uniq, map(value => ({ value, label: value }))])

const selectData = createSelector(selectState, get(_apiData))
const selectError = createSelector(selectState, get(_apiError))
const selectDataSourceOptions = createSelector(selectData, makeSelectorFunction('Datasource'))
const selectCampaignOptions = createSelector(selectData, makeSelectorFunction('Campaign'))

const selectDataWithDefault = createSelector(selectData, defaultTo([]))

const selectCampaignDataWithParams = createCachedSelector(
  selectDataWithDefault,
  (data: StateType, params: string) => params,
  (data: DataType[], paramsString): [ChartItemType[], ChartItemType[]] => {
    const params = JSON.parse(paramsString)
    const filtered = data.filter(filterItems(params.dataSources, params.campaigns))

    const grouped = groupItems(filtered)
    const entries = values(grouped)

    const clickData = []
    const impressionData = []

    for (const item of entries) {
      clickData.push({
        x: parseDate(item.Date),
        y: item.Clicks,
      })

      impressionData.push({
        x: parseDate(item.Date),
        y: item.Impressions,
      })
    }

    return [clickData, impressionData]
  },
)((_state: StateType, params: string) => params)

const selectors = {
  selectData,
  selectError,
  selectDataSourceOptions,
  selectCampaignOptions,
  selectCampaignDataWithParams,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
