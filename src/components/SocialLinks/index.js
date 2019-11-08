import React from "react"

import Icons from "./icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = () => (
    <S.SocialLinksWrapper>
        <S.SocialLinksList>
            <S.SocialTitle>
                You can find me on
            </S.SocialTitle>
            {links.map((link, i) => {
                const Icon = Icons[link.label]

                return (
                    <S.SocialLinksItem key={i}>
                        <S.SocialLinksLink href={link.url} title={link.label} target="_blank" rel="noopener noreferrer">
                            <S.IconWrapper>
                                <Icon />
                            </S.IconWrapper>
                        </S.SocialLinksLink>
                    </S.SocialLinksItem>
                )
            })}
            <S.SocialTitle>
                or send me an email.
            </S.SocialTitle>
        </S.SocialLinksList>
    </S.SocialLinksWrapper>

)

export default SocialLinks