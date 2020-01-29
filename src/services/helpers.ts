import { get, pipe, map, join } from 'lodash/fp'
import { SelectType } from '../types'

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
