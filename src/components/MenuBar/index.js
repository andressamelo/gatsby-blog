import React, {useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Search } from "styled-icons/feather/Search"
import { Grid } from "styled-icons/feather/Grid"
import { List } from "styled-icons/feather/List"
import { LightBulb as Light } from "styled-icons/octicons/LightBulb"
import getThemeColor from "../../utils/getThemeColor.js"

import * as S from "./styled"

const MenuBar = () => {
    const [theme, setTheme] = useState(null)
    const [display, setDisplay] = useState(null)

    const isDarkMode = theme === "dark"
    const isListMode = display === "list"

    const {
        site: { 
            siteMetadata: { author },
        },
    } = useStaticQuery(graphql`
        query titleSite {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    useEffect(() => {
        setTheme(window.__theme)
        setDisplay(window.__display)
        window.__onThemeChange = () => setTheme(window.__theme)
        window.__onDisplayChange = () => setDisplay(window.__display)
    }, [])

    return(
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink cover direction="right" bg={getThemeColor()} duration={0.6} to="/" title="Voltar para a Home">
                    <S.MenuName>
                        {author}
                    </S.MenuName>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarItem title="Mudar o tema" onClick={() => {
                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                }} className={theme} >
                    <Light />
                </S.MenuBarItem>
            </S.MenuBarGroup>
        </S.MenuBarWrapper>        
    )

}

export default MenuBar