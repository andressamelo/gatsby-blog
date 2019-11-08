import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const PostItemLink = styled(AniLink)`
  color: var(--texts);
  display: flex;
  text-decoration: none;
  body#grid & {
    background-color: var(--background);
  }
  &:hover {
    color: var(--highlight);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 3rem 14rem;
  text-align: center;
  width: 100%;
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
  
  ${media.lessThan("large")`
    padding: 2rem 1rem;
  `}
`

export const PostItemTag = styled.div`
  color: ${props =>
    props.background ? props.background : "var(--highlight)"};
  font-size: .8rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--mediumGray);
`

export const PostItemTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  line-height: 42px;
  color: var(--postColor);
  margin: 0.2rem 0 0.5rem;
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  ${media.lessThan("large")`
    font-size: 2rem;
    line-height: 36px;
    margin: 0 0 0.5rem;
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.5;
`