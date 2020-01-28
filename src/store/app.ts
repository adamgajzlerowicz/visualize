import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'

export const mountPoint = 'app'

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
})

const selectState = (state: { app: typeof initialState }) => state[mountPoint]

const selectData = createSelector(selectState, state => state[_apiData])
const selectError = createSelector(selectState, state => state[_apiError])

const selectors = {
  selectData,
  selectError,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
