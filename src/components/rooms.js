import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Title from "./title"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/(home/rooms)/" } }) {
      nodes {
        childImageSharp {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
        base
      }
    }
  }
`

const Rooms = ({ title }) => {
  const {
    allFile: { nodes: images },
  } = useStaticQuery(query)
  return (
    <Wrapper>
      <Title title={title || "i locali"} />
      <div className="tile-layout">
        {images.map((room, index) => {
          const { id, fluid } = room.childImageSharp
          const imgName = room.base
          const [type, name] = imgName.split(".")[0].split("-")
          return (
            <article key={id} className={`div-${index}`}>
              <Image className="img" fluid={fluid} />
              <div className="info">
                <p>- {type} -</p>
                <h3>{name}</h3>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  padding: 3rem 0 5rem 0;
  .tile-layout {
    margin-top: 2rem;
    display: grid;
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    gap: 1rem;
    /* safari workaround */
    grid-gap: 1rem;
    grid-template-rows: 300px 300px;
    grid-auto-rows: 300px;
  }
  .img {
    height: 100%;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  article {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    background: var(--clr-primary-7);
    &:hover .img {
      opacity: 0.2;
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
  @media (min-width: 768px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .tile-layout {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 250px 250px;
      grid-auto-rows: 250px;
    }
  }
  @media (min-width: 1200px) {
    .tile-layout {
      display: grid;
      grid-template-areas:
        "a b b"
        "a c d";
      .div-0 {
        grid-area: a;
      }
      .div-1 {
        grid-area: b;
      }
      .div-2 {
        grid-area: c;
      }
      .div-3 {
        grid-area: d;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
  }
`

Rooms.propTypes = {
  title: PropTypes.string,
}

export default Rooms