import React, { useCallback, useEffect, useState } from 'react'
import useFetch from 'use-http'
import ReactDOM from 'react-dom'
import csv from 'csvtojson'
import { Reset } from 'styled-reset'

import Home from './components/Home'
import { SOURCE_URL } from './common'
import Loader from './components/Loader'
import { t } from './translations'

const App = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  const getData = useCallback(async () => {
    try {
      const response = await fetch(SOURCE_URL)
      if (!response.ok) {
        return
      }
      const data = await response.text()
      const parsed = await csv().fromString(data)
      // @ts-ignore
      setData(parsed)
    } catch (e) {
      setError(e.message)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  if (!data && !error) {
    return <Loader />
  }

  if (error) {
    return <div>{t('common.dataError')}</div>
  }

  console.log(data)
  return (
    <>
      <Reset />
      <Home />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
