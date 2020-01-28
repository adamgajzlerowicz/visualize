import React from 'react'
import styled from 'styled-components'
import CanvasJSReact from '../assets/canvasReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart from '../store/chart'
import { CAMPAIGNS, CLICKS, DATA_SOURCE, DATE, IMPRESSIONS } from '../constants/common'

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const options = {
  title: {
    text: 'Basic Column Chart in React',
  },
  data: [
    {
      type: 'column',
      dataPoints: [
        { label: 'Apple', y: 10 },
        { label: 'Orange', y: 15 },
        { label: 'Banana', y: 25 },
        { label: 'Mango', y: 30 },
        { label: 'Grape', y: 28 },
      ],
    },
  ],
}

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const campaignsData = useSelector(state =>
    chart.selectors.selectCampaignDataWithParams(state, { type: CAMPAIGNS }),
  )
  console.log(campaignsData.length)
  console.log(campaignsData[0])

  return (
    <Container>
      <CanvasJSChart
        options={options}
        // onRef = {ref => this.chart = ref}
      />
    </Container>
  )
}
