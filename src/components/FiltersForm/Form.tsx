import React, { useCallback } from 'react'
import styled from 'styled-components'
import { t } from 'i18n-js'
import DataSourceFilter from './DataSourceFilter'
import CampaignFilter from './CampaignFilter'
import { FormikHandlers } from 'formik'

const Grid = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: 5fr 1fr;
`

const ButtonWrapper = styled.div`
  margin-top: 34px;
`

const SelectWrapper = styled.div`
  margin-top: 6px;
`

export default function Form({ handleSubmit }: FormikHandlers) {
  const onClick = useCallback(() => {
    handleSubmit()
  }, [handleSubmit])
  return (
    <Grid>
      <div>
        <SelectWrapper>
          <DataSourceFilter />
        </SelectWrapper>

        <SelectWrapper>
          <CampaignFilter />
        </SelectWrapper>
      </div>

      <ButtonWrapper>
        <button onClick={onClick} type="button">
          {t('filters.apply')}
        </button>
      </ButtonWrapper>
    </Grid>
  )
}
