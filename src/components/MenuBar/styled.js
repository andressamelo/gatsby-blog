import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const MenuBarWrapper = styled.aside`
  align-items: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.2rem 3rem;
  width: 100vw;
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
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  width: 3.75rem;

  &.light {
    color: #d4d400;

    &:hover {
      color: #e2e240;
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
  color: var(--white);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  position: relative;
  font-size: 1.4rem;
  font-weight: 500;
  // text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`