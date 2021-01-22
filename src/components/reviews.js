import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Title from "./title"
import Image from "gatsby-image"
import { FaQuoteRight } from "react-icons/fa"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"

const query = graphql`
  {
    allReviewsJson {
      nodes {
        fullName
        quote
        src {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Reviews = () => {
  const {
    allReviewsJson: { nodes: reviews },
  } = useStaticQuery(query)
  const [index, setIndex] = React.useState(0)
  React.useEffect(() => {
    const lastIndex = reviews.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, reviews])
  return (
    <Wrapper className="section">
      <Title title="recensioni" />
      <div className="section-center">
        {reviews.map((review, reviewIndex) => {
          const { fullName, quote, src } = review
          const reviewImg = src.childImageSharp.fluid
          let position = "nextSlide"
          if (reviewIndex === index) {
            position = "activeSlide"
          }
          if (
            reviewIndex === index - 1 ||
            (index === 0 && reviewIndex === reviews.length - 1)
          ) {
            position = "lastSlide"
          }
          return (
            <article key={reviewIndex} className={position}>
              <Image fluid={reviewImg} className="img" />
              <h4>{fullName}</h4>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .section-center {
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 800px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
    .img {
      border-radius: 50%;
      margin-bottom: 1rem;
      width: 150px;
      height: 150px;
      margin: 0 auto;
    }
    h4 {
      text-transform: uppercase;
      color: var(--clr-primary-5);
      margin-bottom: 0.25rem;
    }
    .text {
      padding-top: 3rem;
      max-width: 45em;
      margin: 0 auto;
      line-height: 2;
      color: var(--clr-grey-5);
    }
    .icon {
      font-size: 3rem;
      margin-top: 1rem;
      color: var(--clr-primary-5);
    }
    .prev,
    .next {
      position: absolute;
      top: 200px;
      transform: translateY(-50%);
      background: var(--clr-grey-5);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }
    .prev:hover,
    .next:hover {
      background: var(--clr-primary-5);
    }
    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }
    @media (min-width: 800px) {
      .prev,
      .next {
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
      }
    }
 
    article {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);
    }
    article.activeSlide {
      opacity: 1;
      transform: translateX(0);
    }
    article.lastSlide {
      transform: translateX(-100%);
    }
    article.nextSlide {
      transform: translateX(100%);
    }
  }
`

export default Reviews
