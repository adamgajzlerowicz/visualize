import { createActions, createReducer } from 'reduxsauce'
import createCachedSelector from 're-reselect'
import { createSelector } from 'reselect'
import { includes, flow, pluck, uniq, defaultTo, map, get } from 'lodash/fp'
import { DataType, SelectType } from '../types'
import { parseDate, shouldShowItem } from '../services/helpers'
import { t } from '../translations'
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
  (data: DataType[], params) => {
    const clickData = []
    const impressionData = []

    for (const item of data) {
      if (shouldShowItem(item, params.campaigns, params.dataSources)) {
        clickData.push({
          x: parseDate(item.Date),
          y: parseInt(item.Clicks),
        })

        impressionData.push({
          x: parseDate(item.Date),
          y: parseInt(item.Impressions),
        })
      }
    }

    return [
      {
        type: 'spline',
        name: t('chart.clicks'),
        markerSize: 5,
        axisYType: 'secondary',
        showInLegend: true,
        dataPoints: clickData,
      },
      {
        type: 'spline',
        name: t('chart.impressions'),
        markerSize: 5,
        axisYType: 'primary',
        showInLegend: true,
        dataPoints: impressionData,
      },
    ]
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
