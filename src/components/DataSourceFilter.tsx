import React from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'
import app from '../store/app'
import chart from '../store/chart'
import { useAction } from '../services/hooks'

export default function DataSourceFilter() {
  const selected = useSelector(app.selectors.selectSelectedDataSources)
  const options = useSelector(chart.selectors.selectDataSourceOptions)
  const setSelected = useAction(app.creators.setSelectedDataSources)

  return <Select value={selected} onChange={setSelected} options={options} isMulti />
}
