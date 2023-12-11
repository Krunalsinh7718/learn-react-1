import { useState } from 'react'
import './App.css'
import { Card, ThemeToggler } from './components/'
import {ThemeProvider} from './context/ThemeContext'

function App() {



  return (
    <>
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
        <div className='p-4'>
          <ThemeToggler />
          <Card />
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
