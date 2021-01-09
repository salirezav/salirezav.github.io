import React, { useEffect } from 'react'
import ReactDom from 'react-dom'
import { MyHeader } from './components/header'
import './styles/index.scss';
import { Jumbo } from './components/jumbo';
import { Wrapper } from './components/wrapper';
import { ContentWrapper } from "./components/contentWrapper";
import Section from './components/section';
import { About } from './components/about';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faHome, faFlask, faFile, faGem, faChalkboardTeacher, faNewspaper, faPaperPlane, faUserCircle, faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faHome, faFlask, faFile, faGem, faChalkboardTeacher, faNewspaper, faPaperPlane, faUserCircle, faHeart)




function SAV(params) {
  useEffect(() => {
    document.title = "Seyed Alireza Vaezi";
    return () => {
      console.log("hey!");
    }
  })
  return (
    <>
      {/* Header and jumbotron */}
      <Wrapper className="headerWrapper">
        <ContentWrapper className="header">
          <MyHeader />
        </ContentWrapper>
      </Wrapper>
      <Wrapper className="jumboWrapper">
        <ContentWrapper className="jumbo">
          <Jumbo />
        </ContentWrapper>
      </Wrapper>

      {/* The rest of the content */}
      <main>
        <Wrapper className="content">
          <ContentWrapper className="about">
            <Section id="about" title="About" className="about" icon="home" >
              <About></About>
            </Section>
          </ContentWrapper>
          <ContentWrapper className="resume">
            <Section id="resume" title="resume" className="resume" icon="file" />
          </ContentWrapper>
          <ContentWrapper className="research">
            <Section id="research" title="research" className="research" icon="flask" />
          </ContentWrapper>
          <ContentWrapper className="skills">
            <Section id="skills" title="skills" className="skills" icon="gem" />
          </ContentWrapper>
          <ContentWrapper className="teaching">
            <Section id="teaching" title="teaching" className="teaching" icon="chalkboard-teacher" />
          </ContentWrapper>
          <ContentWrapper className="blog">
            <Section id="blog" title="blog" className="blog" icon="newspaper" />
          </ContentWrapper>
          <ContentWrapper className="contact">
            <Section id="contact" title="contact" className="contact" icon="paper-plane" />
          </ContentWrapper>
        </Wrapper>
      </main>
    </>
  )

}
ReactDom.render(<SAV />, document.getElementById('root'))