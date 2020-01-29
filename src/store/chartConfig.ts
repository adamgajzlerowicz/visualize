import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'

export const mountPoint = 'chartConfig'

const _selectedDataSources = 'selectedDataSources'
const _selectedCampaigns = 'selectedCampaigns'
const _isDataSourceVisible = 'isDataSourceVisible'
const _isCampaignDataVisible = 'isCampaignDataVisible'

const { Types: types, Creators: creators } = createActions(
  {
    setSelectedDataSources: ['data'],
    setSelectedCampaigns: ['data'],
    setIsDataSourceVisible: ['data'],
    setIsCampaignDataVisible: ['data'],
  },
  { prefix: mountPoint },
)

const initialState = {
  [_selectedDataSources]: [],
  [_selectedCampaigns]: [],
  [_isDataSourceVisible]: true,
  [_isCampaignDataVisible]: true,
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
  [types.SET_IS_CAMPAIGN_DATA_VISIBLE]: (state: typeof initialState, { data }: any) => ({
    ...state,
    [_isCampaignDataVisible]: data,
  }),
})

const selectState = (state: { chartConfig: typeof initialState }) => state[mountPoint]

const selectSelectedCampaigns = createSelector(selectState, state => state[_selectedCampaigns])
const selectSelectedDataSources = createSelector(selectState, state => state[_selectedDataSources])
const selectIsDataSourceVisible = createSelector(selectState, state => state[_isDataSourceVisible])
const selectIsCampaignDataVisible = createSelector(
  selectState,
  state => state[_isCampaignDataVisible],
)

const selectors = {
  selectSelectedCampaigns,
  selectSelectedDataSources,
  selectIsDataSourceVisible,
  selectIsCampaignDataVisible,
}

export default {
  creators,
  types,
  mountPoint,
  reducer,
  selectors,
}
