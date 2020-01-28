import app from './app'
import chart from './chart'
import chartConfig from './chartConfig'

export const rootReducer = {
  [app.mountPoint]: app.reducer,
  [chart.mountPoint]: chart.reducer,
  [chartConfig.mountPoint]: chartConfig.reducer,
}
