import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import csv from 'csvtojson'
import { Reset } from 'styled-reset'

import Home from './components/Home'
import { SOURCE_URL } from './common'
import Loader from './components/Loader'
import { t } from './translations'
import { DataType } from './types'

const App = () => {
  const [error, setError] = useState(null)
  const [data, setData] = useState<DataType[] | null>(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(SOURCE_URL)
        if (!response.ok) {
          return
        }
        const data = await response.text()
        const parsed: DataType[] = await csv().fromString(data)
        setData(parsed)
      } catch (e) {
        setError(e.message)
      }
    }

    getData()
  }, [])

  if (!data && !error) {
    return <Loader />
  }

  if (error) {
    return <div>{t('common.dataError')}</div>
  }

  return (
    <>
      <Reset />
      <Home />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
