import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/styles'
import { t } from 'i18n-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import DataSourceFilter from './DataSourceFilter'
import CampaignFilter from './CampaignFilter'
import ToggleDataSourceVisibility from "./ToggleDataSourceVisibility";

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
  padding: 20px 16px;
  background-color: #e6f3fc;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 5fr 1fr;
`

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`

const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: bolder;
  margin-top: 16px;
`

const SelectWrapper = styled.div`
  margin-top: 6px;
`
export default function Filters() {
  return (
    <Container>
      <Title>{t('filters.header')}</Title>

      <Grid>
        <div>
          <SectionTitle>
            {t('filters.dataSource')}
            <FontAwesomeIcon icon={faUndo} size="xs" />
            <FontAwesomeIcon icon={faAdjust} size="xs" />
          </SectionTitle>

          <SelectWrapper>
            <DataSourceFilter />
          </SelectWrapper>

          <SectionTitle>
            {t('filters.campaign')}
            <FontAwesomeIcon icon={faUndo} size="xs" />
            <ToggleDataSourceVisibility />
          </SectionTitle>

          <SelectWrapper>
            <CampaignFilter />
          </SelectWrapper>
        </div>

        <div>
          <button>{t('filters.apply')}</button>
        </div>
      </Grid>
    </Container>
  )
}
