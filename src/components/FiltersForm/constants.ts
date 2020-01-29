import { SelectType } from '../../types'

export enum FORM_FIELDS {
  dataSources = 'dataSources',
  campaigns = 'campaigns',
  dataSourceVisible = 'dataSourceVisible',
  campaignVisible = 'campaignVisible',
}

export type InitialValuesType = {
  dataSources: SelectType[]
  campaigns: SelectType[]
  dataSourceVisible: boolean
  campaignVisible: boolean
}

export const initialValues: InitialValuesType = {
  [FORM_FIELDS.dataSources]: [],
  [FORM_FIELDS.campaigns]: [],
  [FORM_FIELDS.dataSourceVisible]: true,
  [FORM_FIELDS.campaignVisible]: true,
}
