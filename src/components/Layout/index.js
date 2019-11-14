import React from "react"
import PropTypes from "prop-types"
import Navbar from "../Navbar"
import { TransitionPortal } from "gatsby-plugin-transition-link";

import * as S from "./styled"
import GlobalStyles from "../../styles/global"


const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
        
        <S.LayoutMain>{children}</S.LayoutMain>

        <TransitionPortal level="top">
          <Navbar />
        </TransitionPortal>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout