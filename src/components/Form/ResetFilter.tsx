import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { useFormikContext } from 'formik'
import UnstyledButton from '../UnstyledButton'

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 4px;
`

type ResetDataSourceFiltersType = {
  name: string
}

export default function ResetFilter({ name }: ResetDataSourceFiltersType) {
  const { setFieldValue } = useFormikContext()

  const onClick = useCallback(() => {
    setFieldValue(name, [])
  }, [setFieldValue, name])

  return (
    <UnstyledButton onClick={onClick}>
      <StyledIcon icon={faUndo} size="xs" />
    </UnstyledButton>
  )
}
