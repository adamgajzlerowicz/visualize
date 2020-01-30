import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/canvasReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart, { StateType } from '../store/chart'
import { makeChartTitle } from '../services/helpers'
import chartConfig from '../store/chartConfig'
import { SelectType } from '../types'
import { t } from '../translations'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const selectedDataSources: SelectType[] = useSelector(
    chartConfig.selectors.selectSelectedDataSources,
  )
  const selectedCampaigns: SelectType[] = useSelector(chartConfig.selectors.selectSelectedCampaigns)
  const config = useSelector(chartConfig.selectors.selectState)

  const [clickData, impressionData] = useSelector((state: StateType) =>
    chart.selectors.selectCampaignDataWithParams(state, config),
  )

  const options = {
    animationEnabled: true,

    axisY: {
      title: 'Clicks',
    },
    axisY2: {
      title: 'Impressions',
    },
    title: {
      text: makeChartTitle(selectedCampaigns, selectedDataSources),
    },
    data: [
      {
        type: 'spline',
        name: t('chart.clicks'),
        markerSize: 5,
        axisYType: 'secondary',
        showInLegend: true,
        dataPoints: clickData,
      },
      {
        type: 'spline',
        name: t('chart.impressions'),
        markerSize: 5,
        axisYType: 'primary',
        showInLegend: true,
        dataPoints: impressionData,
      },
    ],
  }

  return (
    <Container>
      <CanvasJSChart options={options} />
    </Container>
  )
}
