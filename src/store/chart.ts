import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'
import { flow, pluck, uniq, defaultTo, map } from 'lodash/fp'

export const mountPoint = 'chart'

const _apiData = 'apiData'
const _apiError = 'apiError'

const { Types: types, Creators: creators } = createActions({
  setData: ['data'],
  setError: ['data'],
})

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

const selectData = createSelector(selectState, state => state[_apiData])
const selectError = createSelector(selectState, state => state[_apiError])
const selectDataSourceOptions = createSelector(selectData, makeSelectorFunction('Datasource'))
const selectCampaignOptions = createSelector(selectData, makeSelectorFunction('Campaign'))

const selectors = {
  selectData,
  selectError,
  selectDataSourceOptions,
  selectCampaignOptions,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
