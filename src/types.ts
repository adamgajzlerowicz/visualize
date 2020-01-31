export type DataType = {
  Date: string
  Datasource: string
  Campaign: string
  Clicks: string
  Impressions: string
}

export type ParsedDataType = {
  Date: string
  Datasource: string
  Campaign: string
  Clicks: number
  Impressions: number
}

export type ParsedDataWithGroupsType = ParsedDataType & {
  Campaigns: string[]
  Datasources: string[]
}

export type SelectType = {
  value: string
  label: string
}

export type ChartItemType = { x: Date; y: number }

export type GroupedItemsWithGroupsType = { [item: string]: ParsedDataWithGroupsType }
