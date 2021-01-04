import React from 'react'
import ReactDom from 'react-dom'
import { MyHeader } from './components/header'
import './styles/index.scss';
import { Jumbo } from './components/jumbo';
import { Wrapper } from './components/wrapper';
import { ContentWrapper } from "./components/contentWrapper";
import Section from './components/section';


function SAV(params) {
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
            <Section id="about" title="About" />
          </ContentWrapper>
          <ContentWrapper className="about">
            <Section id="about" title="About" />
          </ContentWrapper>
          <ContentWrapper className="about">
            <Section id="about" title="About" />
          </ContentWrapper>
          <ContentWrapper className="about">
            <Section id="about" title="About" />
          </ContentWrapper>
        </Wrapper>
      </main>
    </>
  )

}
ReactDom.render(<SAV />, document.getElementById('root'))