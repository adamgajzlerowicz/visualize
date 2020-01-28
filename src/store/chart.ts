import { createActions, createReducer } from 'reduxsauce'
import createCachedSelector from 're-reselect'
import { createSelector } from 'reselect'
import { flow, pluck, uniq, defaultTo, map, get, filter, eq } from 'lodash/fp'
import { CAMPAIGNS, DATA_SOURCE } from '../constants/common'
import { ChartOptions } from '../types'

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

const reducer = createReducer(initialState, {
  [types.SET_DATA]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_apiData]: data,
  }),
  [types.SET_ERROR]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_apiError]: data,
  }),
})

const selectState = (state: { chart: typeof initialState }) => state[mountPoint]

const makeSelectorFunction = (fieldName: string) =>
  flow([defaultTo([]), pluck(fieldName), uniq, map(value => ({ value, label: value }))])

const selectData = createSelector(selectState, get(_apiData))
const selectDataWithDefault = createSelector(selectData, defaultTo([]))
const selectError = createSelector(selectState, get(_apiError))
const selectDataSourceOptions = createSelector(selectData, makeSelectorFunction(DATA_SOURCE))
const selectCampaignOptions = createSelector(selectData, makeSelectorFunction(CAMPAIGNS))

const selectCampaignDataWithParams = createCachedSelector(
  // @ts-ignore
  selectDataWithDefault,
  (data: any, params: ChartOptions) => filter(item => item[params.type === item.])(params),
)((_state: any, params: {}) => JSON.stringify(params))

const selectors = {
  selectData,
  selectError,
  selectDataSourceOptions,
  selectCampaignOptions,
  selectDataWithDefault,
  selectCampaignDataWithParams,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
