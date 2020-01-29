import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { useAction } from '../services/hooks'
import UnstyledButton from './UnstyledButton'
import styled from 'styled-components'
import app from '../store/app'

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 4px;
`

export default function ResetDataSourceFilters() {
  const setSelectedDataSources = useAction(app.creators.setSelectedDataSources)

  const onClick = useCallback(() => {
    setSelectedDataSources([])
  }, [setSelectedDataSources])

  return (
    <UnstyledButton onClick={onClick}>
      <StyledIcon icon={faUndo} size="xs" />
    </UnstyledButton>
  )
}
