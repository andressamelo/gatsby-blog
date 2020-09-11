import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  background: transparent;
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  background: transparent;
  color: var(--highlight);
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    text-decoration: underline;
  }
  &.previous {
    border-right: 1px dotted var(--borders);
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
    border: 1px solid red;
  }
`