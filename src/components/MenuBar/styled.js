import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const MenuBarWrapper = styled.aside`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 10rem;
  width: 100vw;
  background: var(--background);

  ${media.lessThan("large")`
    padding: 0.2rem 1rem;
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: row;
`

export const MenuBarLink = styled(AniLink)`
  display: block;
  text-decoration: none;
`

export const MenuBarItem = styled.span`
  color: var(--postColor);
  cursor: pointer;
  display: block;
  height: 2.8rem;
  padding: 0.8rem;
  position: relative;
  width: 2.8rem;

  &.light {
    color: var(--highlight);

    &:hover {
      color: #F8668A;
    }
  }

  &:hover {
    color: var(--highlight);
  }
`

export const MenuName = styled(AniLink)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
  }
  color: #FFF;
  background-color: #EE2E5D;
  cursor: pointer;
  display: block;
  position: relative;
  font-size: 1rem;
  padding: 0.2rem;
  font-weight: 500;
  letter-spacing: 0.05rem;
`