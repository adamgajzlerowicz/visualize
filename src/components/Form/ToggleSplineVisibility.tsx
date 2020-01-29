import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton'
import { useField, useFormikContext } from 'formik'

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 4px;
`

type ToggleSplineVisibilityType = {
  name: string
}

export default function ToggleSplineVisibility({ name }: ToggleSplineVisibilityType) {
  const [field] = useField(name)
  const { setFieldValue } = useFormikContext()

  const onClick = useCallback(() => {
    setFieldValue(name, !field.value)
  }, [field, setFieldValue, name])

  return (
    <UnstyledButton onClick={onClick}>
      <StyledIcon icon={faAdjust} size="xs" />
    </UnstyledButton>
  )
}
