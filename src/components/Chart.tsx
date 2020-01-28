import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/canvasReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart, { StateType } from '../store/chart'
import { CLICKS } from '../constants/common'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const campaignsData = useSelector((state: StateType) =>
    chart.selectors.selectCampaignDataWithParams(state, {
      type: CLICKS,
      campaigns: [],
      dataSources: [],
    }),
  )

  const options = {
    animationEnabled: true,

    title: {
      text: 'Basic Column Chart in React',
    },
    data: [
      {
        type: 'spline',
        name: 'Clicks',
        markerSize: 5,
        axisYType: 'secondary',
        showInLegend: true,
        dataPoints: campaignsData,
      },
    ],
  }
  console.log(campaignsData)

  return (
    <Container>
      <CanvasJSChart
        options={options}
        // onRef = {ref => this.chart = ref}
      />
    </Container>
  )
}
