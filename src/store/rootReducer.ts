import app from './app'
export const rootReducer = {
  [app.mountPoint]: app.reducer,
}
