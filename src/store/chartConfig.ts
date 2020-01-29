import { createActions, createReducer } from 'reduxsauce'
import { createSelector } from 'reselect'
import { get } from 'lodash/fp'
import { FORM_FIELDS, initialValues, InitialValuesType } from '../components/FiltersForm/constants'

export const mountPoint = 'chartConfig'

const { Types: types, Creators: creators } = createActions(
  {
    setConfig: ['data'],
  },
  { prefix: mountPoint },
)

const reducer = createReducer(initialValues, {
  [types.SET_CONFIG]: (state: InitialValuesType, { data }: any) => ({
    ...state,
    ...data,
  }),
})

const selectState = get(mountPoint)

const selectSelectedCampaigns = createSelector(selectState, get(FORM_FIELDS.campaigns))
const selectSelectedDataSources = createSelector(selectState, get(FORM_FIELDS.dataSources))
const selectIsDataSourceVisible = createSelector(selectState, get(FORM_FIELDS.dataSourceVisible))
const selectIsCampaignDataVisible = createSelector(selectState, get(FORM_FIELDS.campaignVisible))

const selectors = {
  selectState,
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
