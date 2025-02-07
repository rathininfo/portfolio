import React from 'react'
import Banner from './Banner/Banner'
import AboutMe from './AboutMe/AboutMe'
import Skill from './Skill/Skill'
import Education from './Education/Education'
import Project from './Project/Project'
import Contact from './Contact/Contact'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Education></Education>
      <Project></Project>
      <Contact></Contact>
    </div>
  )
}

export default Home
