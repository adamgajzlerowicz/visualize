import { useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { bindActionCreators } from 'redux'
import { SOURCE_URL } from '../common'
import { DataType } from '../types'
import csv from 'csvtojson'
import app from '../store/app'

export const useAction = (action: any) => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(action, dispatch), [dispatch, action])
}

export const useGetApiData = () => {
  const setError = useAction(app.creators.setError)
  const setData = useAction(app.creators.setData)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(SOURCE_URL)
        if (!response.ok) {
          setError('Error')
        }
        const data = await response.text()
        const parsed: DataType[] = await csv().fromString(data)
        setData(parsed)
      } catch (e) {
        setError(e.message)
      }
    }

    getData()
  }, [setError, setData])
}
