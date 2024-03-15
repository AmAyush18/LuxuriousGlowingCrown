import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout'
import {
  HomePage,
  ServicesPage,
  BridalHairMakeupPage,
  ContactPage
} from './components'

const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<HomePage />} />
        <Route path='services' element={<ServicesPage />} />
        <Route path='bridal-hair-makeup' element={<BridalHairMakeupPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Route>
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Root />
)