import { useEffect, useState } from 'react'
import './App.css'
import { Card, ThemeToggler } from './components/'
import {ThemeProvider} from './context/ThemeContext'

function App() {

  const [theme, setTheme] = useState('light');

  const setDarkTheme = () => {
    setTheme('dark');
  }

  const setLightTheme = () => {
    setTheme('light');

  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(theme);
  },[theme])

  return (
    <>
    <ThemeProvider value={{theme, setDarkTheme, setLightTheme}}>
        <div className='p-4'>
          <ThemeToggler />
          <Card />
        </div>
    </ThemeProvider>
    </>
  )
}

export default App
