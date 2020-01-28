import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import app from '../store/app'
import { useGetApiData } from '../services/hooks'
import Loader from './Loader'
import { t } from '../translations'
import Header from './Header'
import Filters from './Filters'
import Chart from './Chart'

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
  const data = useSelector(app.selectors.selectData)
  const error = useSelector(app.selectors.selectError)

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
          <Filters />

          <Chart />
        </MainContent>
      </Container>
    </Page>
  )
}
