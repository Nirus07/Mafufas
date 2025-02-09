import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PageContextProvider } from './context/ContextPageProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <PageContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PageContextProvider>
  </StrictMode>,
)
