import React from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'
import app from '../store/app'
import chart from '../store/chart'
import { useAction } from '../services/hooks'

export default function CampaignFilter() {
  const selected = useSelector(app.selectors.selectSelectedCampaigns)
  const options = useSelector(chart.selectors.selectCampaignOptions)
  const setSelected = useAction(app.creators.setSelectedCampaigns)

  return <Select value={selected} onChange={setSelected} options={options} isMulti />
}
