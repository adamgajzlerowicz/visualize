import React from 'react'
import styled from 'styled-components'
import * as CanvasJSReact from '../assets/canvasjsReact'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart from '../store/chart'
import { CAMPAIGNS, CLICKS, DATA_SOURCE, DATE, IMPRESSIONS } from '../constants/common'

const CanvasJS = CanvasJSReact.CanvasJS

const CanvasJSChart = CanvasJSReact.CanvasJSChart

const options = {
  title: {
    text: `${this.props.candidate_name}'s Top Contributors`,
  },
  data: [
    {
      type: 'column',
      dataPoints: this.eachContributor(),
    },
  ],
}

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const data = useSelector(chart.selectors.selectDataWithDefault)
  console.log(data.length)
  console.log(data[0])
  return (
    <Container>
      <CanvasJSChart
        options={options}
        // onRef = {ref => this.chart = ref}
      />
    </Container>
  )
}
