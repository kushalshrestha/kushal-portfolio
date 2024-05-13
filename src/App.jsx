import { useState, useEffect } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import TopSection from './sections/TopSection/TopSection';
import ProjectsSection from './sections/ProjectsSection/ProjectsSection';
import Footer from './sections/Footer/Footer';
import AboutSection from './sections/AboutSection/AboutSection';
import SkillSection from './sections/SkillsSection/SkillSection';

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
      <AboutSection/>
      <SkillSection/>
      <Footer/>
    </>
  )
}

export default App
