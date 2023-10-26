import React, {Fragment} from 'react';

import cx from 'classnames';
import { Slider } from 'react-burgers';
import { connect } from 'react-redux';
import {
    setEnableClosedSidebar,
    setEnableMobileMenu,
    setEnableMobileMenuSmall,
} from '../../../reducers/ThemeOptions';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeSearch: false,
            active: false
        };
    }


    toggleEnableClosedSidebar = () => {
        let {enableClosedSidebar, setEnableClosedSidebar} = this.props;
        setEnableClosedSidebar(!enableClosedSidebar);
    }
    render() {
        return (
            <div className='searchBox'>
               {this.props.isAdmin&& <div className="header__pane  ms-auto">
                    
                    <div onClick={this.toggleEnableClosedSidebar}>
                        <Slider className="dark"
                            active={this.props.enableClosedSidebar}
                            type="elastic"
                            onClick={() => this.setState({active: !this.state.active})}
                        />
                    </div>
                </div>}



                <div className={cx("search-wrapper", {
                    'active': this.state.activeSearch
                })}>
                    <div className="input-holder">
                        <input type="text" className="search-input"/>
                        <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})}
                                className="search-icon"><span/></button>
                    </div>
                    <button onClick={() => this.setState({activeSearch: !this.state.activeSearch})} className="btn-close"/>
               
                   
               
                </div>
              
              
            </div>

        )
    }
}



const mapStateToProps = state => ({
    isAdmin: state.auth.user&&state.auth.user.type=="Admin",
    enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
    enableMobileMenu: state.ThemeOptions.enableMobileMenu,
    enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({

    setEnableClosedSidebar: enable => dispatch(setEnableClosedSidebar(enable)),
    setEnableMobileMenu: enable => dispatch(setEnableMobileMenu(enable)),
    setEnableMobileMenuSmall: enable => dispatch(setEnableMobileMenuSmall(enable)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
