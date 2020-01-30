import React, { useCallback } from 'react'
import { useField, useFormikContext } from 'formik'
import styled from 'styled-components'
import Select from 'react-select'
import { SelectType } from '../../types'
import ResetFilter from './ResetFilter'
import ToggleSplineVisibility from './ToggleSplineVisibility'

type TextInputType = {
  name: string
  label: string
  splineName: string
  options: SelectType[]
}

const SectionHeader = styled.div`
  font-size: 16px;
  font-weight: bolder;
  margin-top: 16px;
`

export default function SelectInput({ name, label, options, splineName }: TextInputType) {
  const [field] = useField(name)
  const { value } = field
  const { setFieldValue } = useFormikContext()

  const onChange = useCallback(
    value => {
      setFieldValue(name, value || [])
    },
    [setFieldValue, name],
  )

  return (
    <>
      <SectionHeader>
        {label}
        <ResetFilter name={name} />
        <ToggleSplineVisibility name={splineName} />
      </SectionHeader>

      <Select value={value} options={options} isMulti onChange={onChange} />
    </>
  )
}
