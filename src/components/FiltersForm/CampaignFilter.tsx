import React from 'react'
import { useSelector } from 'react-redux'
import chart from '../../store/chart'
import SelectInput from '../Form/SelectInput'
import { t } from 'i18n-js'
import { FORM_FIELDS } from './constants'

export default function CampaignFilter() {
  const options = useSelector(chart.selectors.selectCampaignOptions)

  return (
    <SelectInput
      options={options}
      label={t('filters.campaign')}
      name={FORM_FIELDS.campaigns}
      splineName={FORM_FIELDS.campaignVisible}
    />
  )
}
