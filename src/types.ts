export type DataType = {
  Date: string
  Datasource: string
  Campaign: string
  Clicks: string
  Impressions: string
}

export type ChartOptions = {
  type: 'Clicks' | 'Impressions'
  campaigns: string[]
  dataSources: string[]
}
