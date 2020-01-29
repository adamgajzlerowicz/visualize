import React, { useCallback } from 'react'

import { t } from '../translations'
import { useSelector } from 'react-redux'
import chartConfig from '../store/chartConfig'
import { useAction } from '../services/hooks'
import app from '../store/app'

export function ApplyChanges() {
  const selectedDataSources = useSelector(app.selectors.selectSelectedDataSources)
  const selectedCampaigns = useSelector(app.selectors.selectSelectedCampaigns)
  const isCampaignDataVisible = useSelector(chartConfig.selectors.selectIsCampaignDataVisible)
  const isDataSourceVisible = useSelector(chartConfig.selectors.selectIsDataSourceVisible)

  const setChartConfig = useAction(chartConfig.creators.setConfig)

  const onClick = useCallback(() => {
    setChartConfig()
  }, [])

  return <button>{t('filters.apply')}</button>
}
