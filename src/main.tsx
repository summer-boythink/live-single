import React from 'react'
import App from './App'
import ReactDOM from "react-dom/client";
import Watch from './Watch/Watch';
import PlaySelf from './PlaySelf/PlaySelf'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './index.css'
import 'antd/dist/antd.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<App />}></Route>
          <Route path='/watch' element={<Watch />}></Route>
          <Route path='/playself' element={<PlaySelf />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
