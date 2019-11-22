import React, { Component } from 'react';
import PropTypes from 'prop-types'
const blockName = 'user-Info'
import sn from 'classnames';
import  './user.scss';

export default class User extends Component {  
    constructor(props){
        super(props);
        this.state = { 
            isOpen: false,
        };
        //this.OnClickUserdetail = this.OnClickUserdetail.bind(this);
    }
    OnClickUserdetail = () => {      
       // this.setState({isOpen:true})         
       this.setState(state => ({
        isOpen: !state.isOpen
      }));
    }  
    render() {  
        const { isOpen } = this.state;      
        return ( 
            <React.Fragment>
                
            <div className="user">
                <span className={sn(`${blockName}__user-icon`)} onClick={this.OnClickUserdetail}>VS</span>
                {
                isOpen  && 
                <div className={sn(`${blockName}__dropdown-nav`)}>
                    <div className="dropdown-personal-details">
                    <a href="/profile">                 
                        <h1 className="dropdown-details--name">{this.props.userdata.data.user_name}</h1>
                        <span>{this.props.userdata.data.email} </span>
                    </a>
                    </div>
                    <div className="section">
                        <h1>{this.props.userdata.data.broker}</h1>
                        <span>{this.props.userdata.data.bank_accounts[0].name}</span>
                        <a href="/profile"><span>My Profile</span></a> 
                        <a href="/coin"><span>Coin</span></a> 
                        <a href="/Pulse"><span>Pulse</span></a> 

                    </div>
                </div>
            }
            </div>
            </React.Fragment>
         );
    }
}
 
User.propTypes  = {
    userdata: PropTypes.object
}