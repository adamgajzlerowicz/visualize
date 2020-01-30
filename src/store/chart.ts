import { createActions, createReducer } from 'reduxsauce'
import createCachedSelector from 're-reselect'
import { createSelector } from 'reselect'
import { values, flow, pluck, uniq, defaultTo, map, get } from 'lodash/fp'
import { ChartItemType, DataType } from '../types'
import { groupItems, parseDate, shouldShowItem } from '../services/helpers'
import { InitialValuesType } from '../components/FiltersForm/constants'

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
  (data: StateType, params: InitialValuesType) => params,
  (data: DataType[], params): [ChartItemType[], ChartItemType[]] => {
    const grouped = groupItems(data)
    const entries = values(grouped)

    const clickData = []
    const impressionData = []

    for (const item of entries) {
      if (shouldShowItem(item, params.campaigns, params.dataSources)) {
        clickData.push({
          x: parseDate(item.Date),
          y: item.Clicks,
        })

        impressionData.push({
          x: parseDate(item.Date),
          y: item.Impressions,
        })
      }
    }

    return [clickData, impressionData]
  },
)((_state: StateType, params: {}) => JSON.stringify(params))

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
