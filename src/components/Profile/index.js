import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Profile = () => {
    const {
        site: { 
            siteMetadata: { description, author },
        },
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    description
                    author
                }
            }
        }
  `)

    return (
        <S.ProfileWrapper>
            {/* <S.ProfilePhoto>
                <Avatar />
            </S.ProfilePhoto> */}

            <S.ProfileColumn>
                <S.ProfileAuthor>{author}</S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
                <SocialLinks />                
            </S.ProfileColumn>
        </S.ProfileWrapper>
    )
}


export default Profile