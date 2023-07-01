import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import RecipeApp from './RecipeApp.jsx'
import {Routes, Route,NavLink} from 'react-router-dom'


function App() {
  

  return (
    <>
      <div className="App">

        <header className="App-header">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >

            </nav>
            </header>

            <main>
              <NavLink to="/">
                Recipe App
              </NavLink>

            </main>

            <Routes>

              <Route path="/" element={<RecipeApp />} />


              

            </Routes>

            </div>

      
    </>
  )
}

export default App
