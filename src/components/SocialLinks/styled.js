import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  ${media.lessThan("large")`
    display: none;
  `}
`

export const SocialLinksList = styled.ul`
  display: block ruby;
  list-style: none;
`

export const SocialLinksItem = styled.li`
  padding: 0.5rem;
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
  width: 30px;
  height: 30px;
`