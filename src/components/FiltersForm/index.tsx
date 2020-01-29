import React, { useCallback } from 'react'
import { Formik } from 'formik'
import styled from 'styled-components'
import { COLORS } from '../../constants/styles'
import { t } from 'i18n-js'

import { initialValues } from './constants'
import Form from './Form'

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
  const onSubmit = useCallback(async data => {
    console.log(data)
  }, [])

  return (
    <Container>
      <Title>{t('filters.header')}</Title>

      <Formik initialValues={initialValues} onSubmit={onSubmit} component={Form} />
    </Container>
  )
}
