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

export default function ToggleCampaignDataVisibility() {
  const isCampaignDataVisible = useSelector(chartConfig.selectors.selectIsCampaignDataVisible)
  const setIsCampaignDataVisible = useAction(chartConfig.creators.setIsCampaignDataVisible)

  const onClick = useCallback(() => {
    setIsCampaignDataVisible(!isCampaignDataVisible)
  }, [setIsCampaignDataVisible, isCampaignDataVisible])

  return (
    <UnstyledButton onClick={onClick}>
      <StyledIcon icon={faAdjust} size="xs" />
    </UnstyledButton>
  )
}
