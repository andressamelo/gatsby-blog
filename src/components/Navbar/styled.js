import styled from "styled-components"

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  display: flex;
  align-items: center;
  z-index: 1000;
`
export const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
    background: var(--solidBackground);
  }
  .test {
    border: 1px solid red;
  }
  .testtest {
    border: 2px solid black;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`