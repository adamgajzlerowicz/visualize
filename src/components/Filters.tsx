import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/styles'
import { t } from 'i18n-js'

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
`

export default function Filters() {
  return (
    <Container>
      <Title>{t('filters.header')}</Title>

      <Grid>
        <div>
          <SectionTitle>{t('filters.dataSource')} v r</SectionTitle>

          <SectionTitle>{t('filters.campaign')} v r</SectionTitle>
        </div>

        <div>
          <button>{t('filters.apply')}</button>
        </div>
      </Grid>
    </Container>
  )
}
