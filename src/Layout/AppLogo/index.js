import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import { Slider } from "react-burgers";

import AppMobileMenu from '../AppMobileMenu';

import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../reducers/ThemeOptions';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = styled.h1`
font-weight: bold;
font-family: cursive;
color:purple;
font-size: 35px;
display: inline;
`


class HeaderLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            mobile: false,
            activeSecondaryMenuMobile: false
        };

    }

    toggleEnableClosedSidebar = () => {
        let {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }

    state = {
        openLeft: false,
        openRight: false,
        relativeWidth: false,
        width: 280,
        noTouchOpen: false,
        noTouchClose: false,
    };

    render() {
        console.log(this.props)
        let {
            enableClosedSidebar,
        } = this.props;

        const {
        } = this.state;

        return (
            <Fragment>
                <div className="app-header__logo">
                <Link to="/"><Logo><BsFillCloudArrowDownFill logotip="logos" className="logo" /> SaleCart.com</Logo></Link>
  
                </div>
                <AppMobileMenu/>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLogo);