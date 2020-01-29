import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/canvasReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart, { StateType } from '../store/chart'
import app from '../store/app'
import { makeChartTitle } from '../services/helpers'
import { SelectType } from '../types'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const selectedDataSources: SelectType[] = useSelector(app.selectors.selectSelectedDataSources)
  const selectedCampaigns: SelectType[] = useSelector(app.selectors.selectSelectedCampaigns)

  const data = useSelector((state: StateType) =>
    chart.selectors.selectCampaignDataWithParams(state, {
      campaigns: [],
      dataSources: [],
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
      <CanvasJSChart
        options={options}
        // onRef = {ref => this.chart = ref}
      />
    </Container>
  )
}
