import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterWithHook } from './01-useState/CounterWithHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main">
      <h1>HooksApp</h1>
      <hr />
      <div className="container">
        <HooksApp />
      </div>
    </div>
  </React.StrictMode>,
)
