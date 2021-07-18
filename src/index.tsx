import 'core-js'
import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import 'regenerator-runtime/runtime'
import { App } from './App'
import './index.css'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
