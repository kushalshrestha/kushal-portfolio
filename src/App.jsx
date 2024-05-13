import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import TopSection from './sections/TopSection/TopSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      document.body.classList.add('dark-mode')
    }
  }, [])  
  return (
    <>
      <Menu/>
      <TopSection/>
      <ProjectsSection/>
    </>
  )
}

export default App
