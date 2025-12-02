import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import RootLayout from './Layouts/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout></RootLayout>
  </StrictMode>,
)
