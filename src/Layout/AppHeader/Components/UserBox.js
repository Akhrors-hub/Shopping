import React, {Fragment} from 'react';

import { connect } from 'react-redux';
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../../actions/authactions"
import {
    DropdownToggle, DropdownMenu,
    Nav, Button, NavItem, NavLink,
    UncontrolledTooltip, UncontrolledButtonDropdown
} from 'reactstrap';

import {
    toast,
    Bounce
} from 'react-toastify';


import {
    faCalendarAlt,
    faAngleDown

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import 'react-toastify/dist/ReactToastify.css';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import defaultAvatar from '../../../assets/utils/images/avatars/default.jpg';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';

class UserBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };

    }

    notify2 = () => this.toastId = toast("You don't have any new items in your calendar for today! Go out and play!", {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });
 
 loggedIn = (
    <Fragment>
    <div className="widget-content-left">
    <UncontrolledButtonDropdown>
        <DropdownToggle color="link" className="p-0">
            <img width={42} className="rounded-circle" src={avatar1} alt=""/>
            <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleDown}/>
        </DropdownToggle>
        <DropdownMenu end className="rm-pointers dropdown-menu-lg">
            <Nav vertical>
              
               
              
                <NavItem className="nav-item-header">
                    My Account
                </NavItem>
                <NavItem>
                    <NavLink href="#">Change Password</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Settings
                        
                    </NavLink>
                </NavItem>
               
                <NavItem>
                    <NavLink onClick={()=> this.props.logout()}>
                    LOG OUT
                        
                    </NavLink>
                </NavItem>

            </Nav>
        </DropdownMenu>
    </UncontrolledButtonDropdown>
</div>
<div className="widget-content-left  ms-3 header-user-info">
    <div className="widget-heading">
    <BsCart />
    </div>
   
</div>
</Fragment>
)

loggedOut = (
    <Fragment>
    <div className="widget-content-left">
    <UncontrolledButtonDropdown>
        <DropdownToggle color="link" className="p-0">
            <img width={42} className="rounded-circle" src={defaultAvatar}  alt=""/>
            <FontAwesomeIcon className="ms-2 opacity-8" icon={faAngleDown}/>
        </DropdownToggle>
        <DropdownMenu end className="rm-pointers dropdown-menu-lg">
            <Nav vertical>
              
            
            <NavItem>
                    <NavLink >
                    <Link to="/login"> LOG IN</Link>
                        
                    </NavLink>
                </NavItem>
   
                <NavItem>
                    <NavLink>
                    <Link to="/register">REGISTER</Link>
                        
                    </NavLink>
                </NavItem>

            </Nav>
        </DropdownMenu>
    </UncontrolledButtonDropdown>
</div>
<div className="widget-content-left  ms-3 header-user-info">
   
</div>
</Fragment>
)
    render() {
        const { auth, isAuth } = this.props;    
        console.log(this.props)
        return (
            <Fragment>
                <div className="header-btn-lg pe-0">
                    <div className="widget-content p-0">
                        <div className="widget-content-wrapper">
                        {isAuth?this.loggedIn:this.loggedOut}   


                            <div className="widget-content-right header-user-info ms-3">
                                

                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,// Adjust this based on your actual state structure
    isAuth: state.auth.isAuth
  });
  
  
 const mapDispatchToProps = (dispatch)=> {
    return {
        logout: ()=>{
            
            console.log("test")
            dispatch(logout())
        }

    }
 }
  
  // Connect the component to the Redux store
  export default connect(mapStateToProps,  mapDispatchToProps )(UserBox);
