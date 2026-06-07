import cv from '../data/cv'
import Hero from '../components/cv/Hero'
import Contact from '../components/cv/Contact'
import Profile from '../components/cv/Profile'
import Skills from '../components/cv/Skills'
import Experience from '../components/cv/Experience'
import Education from '../components/cv/Education'
import Objective from '../components/cv/Objective'
import ActionBar from '../components/cv/ActionBar'

export default function CV() {
  return (
    <div>
      <article id="cv-content">
        <Hero cv={cv} />
        <Contact cv={cv} />
        <Profile cv={cv} />
        <Skills cv={cv} />
        <Experience cv={cv} />
        <Objective cv={cv} />
        <Education cv={cv} />
      </article>
      <ActionBar cv={cv} />
    </div>
  )
}
