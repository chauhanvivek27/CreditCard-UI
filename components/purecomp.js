import React, { Component } from 'react';

class Purecomp extends Component {
    constructor(props) {
        console.log('Child Constructor');
         super(props);
         this.state = {
            row: props.row,
        }
    }

    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Child Should component update');
        return true;
    }

  static  getDerivedStateFromProps(){
    console.log('Child getDerivedStateFromProps');
       return null;
        
    }
    componentDidMount() {
        console.log('Child componentDidMount');
      }

      UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log('Child UNSAFE_componentWillUpdate');
      }

      componentWillMount()
      {
          console.log('Child component Will mount');
      }
  
    render() {        
       console.log(this.props)
        console.log('Child render component');
        return ( <h2>Pure component {this.props.row}</h2> );
    }
}
 
export default Purecomp;