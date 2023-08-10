import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterWithHook } from './01-useState/CounterWithHook'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <MainApp /> */}
      <div className="main">
        <h1>HooksApp</h1>
        <hr />
        <div className="container">
          <HooksApp />
        </div>
      </div>
    </React.StrictMode>,
  </BrowserRouter>
)
