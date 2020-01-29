import { SelectType } from '../../types'

export enum FORM_FIELDS {
  dataSource = 'dataSource',
  campaign = 'campaign',
  dataSourceVisible = 'dataSourceVisible',
  campaignVisible = 'campaignVisible',
}

export type InitialValuesType = {
  dataSource: SelectType[]
  campaign: SelectType[]
  dataSourceVisible: boolean
  campaignVisible: boolean
}

export const initialValues: InitialValuesType = {
  [FORM_FIELDS.dataSource]: [],
  [FORM_FIELDS.campaign]: [],
  [FORM_FIELDS.dataSourceVisible]: true,
  [FORM_FIELDS.campaignVisible]: true,
}
