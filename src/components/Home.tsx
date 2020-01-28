import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import app from '../store/app'
import { useGetApiData } from '../services/hooks'
import Loader from './Loader'
import { t } from '../translations'

const Page = styled.div`
  height: 100vh;
  width: 100vw;
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

  return <Page>hellool</Page>
}
