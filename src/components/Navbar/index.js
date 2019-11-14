import React, {Component} from "react"
import * as S from "./styled"
import MenuBar from "../MenuBar"

export default class Navbar extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          show: true,
          scrollPos: 0
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
  
    handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > scrollPos
        });
    }
  
    render() {
      
        return (
            <S.Transition>
                <S.StyledNavbar className={this.state.show ? "active" : "hidden"}>
                    <MenuBar />
                </S.StyledNavbar>                
            </S.Transition>
          );
    }
}