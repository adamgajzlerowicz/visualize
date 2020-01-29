export enum FORM_FIELDS {
  dataSource = 'dataSource',
  campaign = 'campaign',
  dataSourceVisible = 'dataSourceVisible',
  campaignVisible = 'campaignVisible',
}

export const initialValues = {
  [FORM_FIELDS.dataSource]: [],
  [FORM_FIELDS.campaign]: [],
  [FORM_FIELDS.dataSourceVisible]: true,
  [FORM_FIELDS.campaignVisible]: true,
}
