import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'
import { flow, pluck, uniq, defaultTo, map, get } from 'lodash/fp'
import { CAMPAIGNS, DATA_SOURCE } from '../constants/common'

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

const selectors = {
  selectData,
  selectError,
  selectDataSourceOptions,
  selectCampaignOptions,
  selectDataWithDefault,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
