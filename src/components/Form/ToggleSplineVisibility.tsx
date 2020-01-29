import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton'
import { useField, useFormikContext } from 'formik'
import { COLORS } from '../../constants/styles'

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 4px;
`

type ToggleSplineVisibilityType = {
  name: string
}

export default function ToggleSplineVisibility({ name }: ToggleSplineVisibilityType) {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()
  const { value } = field
  const onClick = useCallback(() => {
    setFieldValue(name, !value)
  }, [value, setFieldValue, name])

  return (
    <UnstyledButton onClick={onClick}>
      <StyledIcon icon={faAdjust} size="xs" color={value ? COLORS.black : COLORS.grey} />
    </UnstyledButton>
  )
}
