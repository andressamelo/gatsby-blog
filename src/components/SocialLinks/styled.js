import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  width: 100%;
`
export const SocialTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 3;

  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  display: block ruby;
  list-style: none;

  ${media.lessThan("large")`
    margin-top: 1rem;
  `}
`

export const SocialLinksItem = styled.li`
  padding: .2rem;

  &:first-of-type {
    margin-left: .5rem;
  }
  &:last-of-type {
    margin-right: .5rem;
  }
`

export const SocialLinksLink = styled.a`
  color: var(--texts);
  text-decoration: none;
  transition: color 0.5s;
  &:hover {
    color: var(--highlight);
  }
`

export const IconWrapper = styled.div`
  fill: #bbb;
  width: 24px;
  height: 24px;
`