import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/canvasReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart, { StateType } from '../store/chart'
import { makeChartTitle } from '../services/helpers'
import chartConfig from '../store/chartConfig'
import { SelectType } from '../types'

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

  const data = useSelector((state: StateType) =>
    chart.selectors.selectCampaignDataWithParams(state, config),
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
