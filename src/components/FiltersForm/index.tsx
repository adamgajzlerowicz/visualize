import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import { COLORS } from '../../constants/styles'
import { t } from 'i18n-js'

import { initialValues } from './constants'
import Form from './Form'
import { useAction } from '../../services/hooks'
import chartConfig from '../../store/chartConfig'

const Container = styled.div`
  border: 1px solid ${COLORS.dirtyWhite};
  padding: 20px 16px;
  background-color: #e6f3fc;
`

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 24px;
`

export default function FiltersForm() {
  const onSubmit = useAction(chartConfig.creators.setConfig)

  return (
    <Container>
      <Title>{t('filters.header')}</Title>

      <Formik initialValues={initialValues} onSubmit={onSubmit} component={Form} />
    </Container>
  )
}
