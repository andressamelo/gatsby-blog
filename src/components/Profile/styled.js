import styled from "styled-components"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5rem;
  width: 100%;
  
  ${media.lessThan("large")`
    text-align: left;
  `}
`

export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 3;
`
export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem 0;
  font-weight: 500;
  
  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  ${media.lessThan("large")`
    display: none;
  `}
`