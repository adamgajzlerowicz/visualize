import { get, pipe, map, join, pluck } from 'lodash/fp'
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

export const filterItems = (dataSources: SelectType[], campaigns: SelectType[]) => (
  item: DataType,
) => {
  if (!campaigns.length && !dataSources.length) {
    return true
  }

  if (dataSources.length && !pluck('value', dataSources).includes(item.Datasource)) {
    return false
  }

  if (campaigns.length && !pluck('value', campaigns).includes(item.Campaign)) {
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
  data.reduce((acc: GroupedItemsType, rawItem: DataType) => {
    const item = makeDefaultItem(rawItem)
    const exists = acc[item.Date]

    if (exists) {
      const previousItem = acc[item.Date]

      return {
        ...acc,
        [item.Date]: {
          ...item,
          Clicks: item.Clicks + previousItem.Clicks,
          Impressions: item.Impressions + previousItem.Impressions,
        },
      }
    }
    return {
      ...acc,
      [item.Date]: {
        ...item,
      },
    }
  }, {})
