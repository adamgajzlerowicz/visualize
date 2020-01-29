import React, { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { useAction } from '../services/hooks'
import chartConfig from '../store/chartConfig'
import UnstyledButton from './UnstyledButton'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0 4px;
`

export default function ToggleDataSourceVisibility() {
  const isDataSourceVisible = useSelector(chartConfig.selectors.selectIsDataSourceVisible)
  const setIsDataSourceVisible = useAction(chartConfig.creators.setIsDataSourceVisible)

  const onClick = useCallback(() => {
    setIsDataSourceVisible(!isDataSourceVisible)
  }, [isDataSourceVisible, setIsDataSourceVisible])

  return (
    <UnstyledButton onClick={onClick}>
      <StyledIcon icon={faAdjust} size="xs" />
    </UnstyledButton>
  )
}
