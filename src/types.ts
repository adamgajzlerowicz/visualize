export type DataType = {
  Date: string
  Datasource: string
  Campaign: string
  Clicks: string
  Impressions: string
}

export type SelectType = {
  value: string
  label: string
}

export type ChartOptions = {
  campaigns: SelectType[]
  dataSources: SelectType[]
}
