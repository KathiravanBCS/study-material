import { MantineProvider } from '@mantine/core'
import { Router } from './Routers'
import '@mantine/core/styles.css'
import './App.css'

const theme = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
}

function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  )
}

export default App
