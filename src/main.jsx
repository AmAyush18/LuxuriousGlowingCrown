import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout'
import {
  HomePage,
} from './components'

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)