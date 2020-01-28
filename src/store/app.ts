import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'

export const mountPoint = 'app'

const _selectedDataSources = 'selectedDataSources'
const _selectedCampaigns = 'selectedCampaigns'

const { Types: types, Creators: creators } = createActions(
  {
    setSelectedDataSources: ['data'],
    setSelectedCampaigns: ['data'],
    setAppliedChartConfig: ['data'],
  },
  { prefix: mountPoint },
)

const initialState = {
  [_selectedDataSources]: undefined,
  [_selectedCampaigns]: undefined,

}

const reducer = createReducer(initialState, {
  [types.SET_SELECTED_DATA_SOURCES]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_selectedDataSources]: data,
  }),
  [types.SET_SELECTED_CAMPAIGNS]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_selectedCampaigns]: data,
  }),
})

const selectState = (state: { app: typeof initialState }) => state[mountPoint]

const selectSelectedCampaigns = createSelector(selectState, state => state[_selectedCampaigns])
const selectSelectedDataSources = createSelector(selectState, state => state[_selectedDataSources])

const selectors = {
  selectSelectedCampaigns,
  selectSelectedDataSources,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
