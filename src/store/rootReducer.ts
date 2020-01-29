import chart from './chart'
import chartConfig from './chartConfig'

export const rootReducer = {
  [chart.mountPoint]: chart.reducer,
  [chartConfig.mountPoint]: chartConfig.reducer,
}
