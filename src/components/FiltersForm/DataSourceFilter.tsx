import React from 'react'
import { useSelector } from 'react-redux'
import chart from '../../store/chart'
import SelectInput from '../Form/SelectInput'
import { t } from 'i18n-js'
import { FORM_FIELDS } from './constants'

export default function DataSourceFilter() {
  const options = useSelector(chart.selectors.selectDataSourceOptions)

  return (
    <SelectInput
      options={options}
      label={t('filters.dataSource')}
      name={FORM_FIELDS.dataSource}
      splineName={FORM_FIELDS.dataSourceVisible}
    />
  )
}
