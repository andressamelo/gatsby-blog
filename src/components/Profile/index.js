import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Avatar from "../Avatar"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Profile = () => {
    const {
        site: { 
            siteMetadata: { description, title },
        },
    } = useStaticQuery(graphql`
        query MySiteMetadata {
            site {
                siteMetadata {
                    description
                    title
                }
            }
        }
  `)

    return (
        <S.ProfileWrapper>
            <S.ProfileColumn>
                <S.ProfilePhoto>
                    <Avatar />
                </S.ProfilePhoto>
                <S.ProfileAuthor>{title}</S.ProfileAuthor>
                <S.ProfileDescription>{description}</S.ProfileDescription>
                <SocialLinks />                
            </S.ProfileColumn>
        </S.ProfileWrapper>
    )
}


export default Profile