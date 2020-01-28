import app from './app'
import chart from './chart'

export const rootReducer = {
  [app.mountPoint]: app.reducer,
  [chart.mountPoint]: chart.reducer,
}
