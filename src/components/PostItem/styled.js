import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
  padding: 2rem 3rem;
  width: 100%;
  body#grid & {
    border: none;
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemTag = styled.div`
  color: ${props =>
    props.background ? props.background : "var(--highlight)"};
  font-size: .8rem;
  font-weight: 400;
  display: inline-table;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: var(--mediumGray);
`

export const PostItemTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 42px;
  color: var(--postColor);
  margin: 0.2rem 0 0.5rem;
  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }
`

export const PostItemDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.2;
`