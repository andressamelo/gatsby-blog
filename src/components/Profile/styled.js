import styled from "styled-components"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  color: var(--texts);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5rem;
  width: 100%;
  border-bottom: 1px solid #dedede;
  text-align: center;
  
  ${media.lessThan("large")`
    text-align: left;
  `}
`
export const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 4;
`
export const ProfilePhoto = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 3;
`
export const ProfileAuthor = styled.h1`
  font-size: 3.4rem;
  margin: 0.5rem 0;
  font-weight: 700;
  color: var(--postColor);

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`
export const ProfileDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.5;

  ${media.lessThan("large")`
    display: none;
  `}
`