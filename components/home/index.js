import React, { Component } from 'react';
import './home.scss';
import Purecomp from '../purecomp';
import PropTypes from 'prop-types';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.count,
        }
        console.log('Parent Constructor called')
    }

    Onchangetext = (e) => {
        this.setState({
           count: e.target.value
        })
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props, state);
        console.log('Parent getDerivedStateFromProps');
        return   null
        
      }

      shouldComponentUpdate(nextProps, nextState) {
          console.log(this.state, nextState);
          console.log(this.props, nextProps);
          console.log('Parent Should component update');
          return true;
      }
      UNSAFE_componentWillMount()
    {
        console.log('Parent component Will mount');
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log('Parent UNSAFE_componentWillUpdate');
      }

    componentDidMount(){
        console.log('Parent component Did mount call');

    }

    handleClick = () => {
        console.log('Handle CLick')
        this.setState({
            count: 200,
        })
    }

    render() { 
        console.log('Parent render called');
        return (
           
            <React.Fragment>
            <div className="home">
                <p>Home</p>
                <input value={this.state.count} type="text" style={{ margin: '5px' }} onChange={this.Onchangetext} ></input>
                <button onClick={this.handleClick} > Click On</button>
            </div>
             <Purecomp row={this.state.count}/>
             </React.Fragment>
          );
    }
}


Home.propTypes = {
    value:PropTypes.number
}
 
export default Home;