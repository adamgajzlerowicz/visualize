import { get, pipe, map, join, includes, pluck } from 'lodash/fp'
import { DataType, GroupedItemsType, ParsedDataType, SelectType } from '../types'

export const parseDate = (date: string | undefined) => {
  const dateParts = (date || '').split('.')

  return new Date([dateParts[2], dateParts[1], dateParts[0]].join('.'))
}

const wrapStringWithDoubleQuotes = (item: string) => `"${item}"`

const joinItemsAsLabel = pipe(map(pipe(get('label'), wrapStringWithDoubleQuotes)), join(', '))

export const makeChartTitle = (
  selectedCampaigns: SelectType[],
  selectedDataSources: SelectType[],
) => {
  let result = ''

  if (selectedDataSources.length) {
    result = 'Datasources: ' + joinItemsAsLabel(selectedDataSources)
  } else {
    result = result + 'All Datasources'
  }

  result = result + ', '

  if (selectedCampaigns.length) {
    result = result + 'Campaigns: ' + joinItemsAsLabel(selectedCampaigns)
  } else {
    result = result + 'All Campaigns'
  }
  return result
}

export const shouldShowItem = (
  item: ParsedDataType,
  campaigns: SelectType[],
  dataSources: SelectType[],
) => {
  if (!campaigns.length && !dataSources.length) {
    return true
  }

  if (dataSources.length && !includes(get('Datasource', item), pluck('value', dataSources))) {
    return false
  }

  if (campaigns.length && !includes(get('Campaign', item), pluck('value', campaigns))) {
    return false
  }

  return true
}

export const makeDefaultItem = (item: DataType): ParsedDataType => ({
  ...item,
  Impressions: parseInt(item.Impressions) || 0,
  Clicks: parseInt(item.Clicks) || 0,
})

export const groupItems = (data: DataType[]): GroupedItemsType =>
  data.reduce((acc: GroupedItemsType, rawItem) => {
    const item = makeDefaultItem(rawItem)
    const exists = acc[item.Date]

    if (exists) {
      return {
        ...acc,
        [item.Date]: {
          ...item,
          Clicks: item.Clicks + acc[item.Date].Clicks,
          Impressions: item.Impressions + acc[item.Date].Impressions,
        },
      }
    }
    return {
      ...acc,
      [item.Date]: item,
    }
  }, {})
