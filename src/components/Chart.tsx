import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/canvasReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart, { StateType } from '../store/chart'
import { makeChartTitle } from '../services/helpers'
import chartConfig from '../store/chartConfig'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const selectedDataSources = useSelector(chartConfig.selectors.selectSelectedDataSources)
  const selectedCampaigns = useSelector(chartConfig.selectors.selectSelectedCampaigns)

  const data = useSelector((state: StateType) =>
    chart.selectors.selectCampaignDataWithParams(state, {
      campaigns: selectedCampaigns,
      dataSources: selectedDataSources,
    }),
  )

  const options = {
    animationEnabled: true,

    title: {
      text: makeChartTitle(selectedCampaigns, selectedDataSources),
    },
    data,
  }

  return (
    <Container>
      <CanvasJSChart options={options} />
    </Container>
  )
}
