import React from "react"
import styled from "styled-components"
import Title from "./title"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "home/about/house.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Wrapper className="section">
      <Title title="La struttura" />
      <div className="section-center">
        <div className="imgContainer">
          <Image fluid={fluid} className="img" />
          <div className="info">
            <p>- abitazione -</p>
            <h3>esterno</h3>
          </div>
        </div>
        <div className="house-desc">
          <h3>Orizzonte Marino</h3>
          <p>
            <span>Una casa immersa nel verde, </span>
            lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, ipsum
            excepturi optio non molestias cumque adipisci suscipit commodi
            doloribus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi natus
            nulla molestiae temporibus a, dignissimos harum quis laborum vel
            molestias libero sint sed porro ab, est nesciunt. Animi, magnam
            inventore!
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .section-center {
    margin-top: 4rem;
    display: grid;
    gap: 3rem;
    /* safari workaround */
    grid-gap: 3rem;
    .imgContainer {
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-7);
      &:hover .img {
      opacity: 0.2;
    }
      .img {
        height: 25rem;
      }
      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    .house-desc {
      h3 {
        text-align: center;
      }
      p span {
        font-size: 1.1rem;
        color: var(--clr-primary-6);
      }
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export default About
