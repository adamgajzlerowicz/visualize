import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

import { COLORS } from '../constants/styles'
import { useSelector } from 'react-redux'
import chart from '../store/chart'
import {CAMPAIGNS, CLICKS, DATA_SOURCE, DATE, IMPRESSIONS} from '../constants/common'

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
`

export default function Chart() {
  const data = useSelector(chart.selectors.selectDataWithDefault)
  console.log(data.length);
  console.log(data[0])
  return (
    <Container>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={DATE} />
        <YAxis dataKey={CLICKS} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={CLICKS} stroke="#8884d8" />
        <Line type="monotone" dataKey={IMPRESSIONS} stroke="#82ca9d" />
      </LineChart>
    </Container>
  )
}
