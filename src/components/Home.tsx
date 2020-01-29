import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { useGetApiData } from '../services/hooks'
import Loader from './Loader'
import { t } from '../translations'
import Header from './Header'
import FiltersForm from './FiltersForm'
import Chart from './Chart'
import chart from '../store/chart'

const Page = styled.div`
  width: 100vw;
`

const Container = styled.div`
  padding: 16px;
`

const MainContent = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 2fr;
`

export default function Home() {
  const data = useSelector(chart.selectors.selectData)
  const error = useSelector(chart.selectors.selectError)

  useGetApiData()

  if (!data && !error) {
    return <Loader />
  }

  if (error) {
    return <div>{t('common.dataError')}</div>
  }

  return (
    <Page>
      <Container>
        <Header />
        <MainContent>
          <FiltersForm />

          <Chart />
        </MainContent>
      </Container>
    </Page>
  )
}
