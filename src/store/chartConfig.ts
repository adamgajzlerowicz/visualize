import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'

export const mountPoint = 'chartConfig'

const _selectedDataSources = 'selectedDataSources'
const _selectedCampaigns = 'selectedCampaigns'
const _isDataSourceVisible = 'isDataSourceVisible'
const _isCampaignsVisible = 'isCampaignsVisible'

const { Types: types, Creators: creators } = createActions(
  {
    setSelectedDataSources: ['data'],
    setSelectedCampaigns: ['data'],
    setIsDataSourceVisible: ['data'],
    setIsCampaignsVisible: ['data'],
  },
  { prefix: mountPoint },
)

const initialState = {
  [_selectedDataSources]: [],
  [_selectedCampaigns]: [],
  [_isDataSourceVisible]: true,
  [_isCampaignsVisible]: true,
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
  [types.SET_IS_DATA_SOURCE_VISIBLE]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_isDataSourceVisible]: data,
  }),
  [types.SET_IS_CAMPAIGNS_VISIBLE]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_isCampaignsVisible]: data,
  }),
})

const selectState = (state: { chartConfig: typeof initialState }) => state[mountPoint]

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
