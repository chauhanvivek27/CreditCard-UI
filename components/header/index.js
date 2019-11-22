import React  from 'react';
import './header.scss'; 

const apiGetURL = 'http://localhost:3000/getall';
const apiaddURL = 'http://localhost:3000/add';
export default class App extends React.Component {

    
    state = {
        ccdata: null,
        name: '',
        ccno: '',
        limit: '',
        errmessage:'',
        isFetch: false,
      };

    componentDidMount() {
        console.log('componentDidMount');
        fetch(apiGetURL)
        .then(res => res.json())
        .then((response) => {
          this.setState({ ccdata: response.data })
        })
        .catch(error => {
            throw(error);
        })
    }

    componentDidUpdate(prevProps, prevState) {     
        const { isFetch } = this.state;
        if(isFetch){
            fetch(apiGetURL)
            .then(res => res.json())
            .then((response) => {
                let updatedCC = { ccdata: response.data };
                console.log('prevState.ccdata', prevState.ccdata && Object.keys(prevState.ccdata).length );
                console.log('updatedCC', Object.keys(updatedCC.ccdata).length );
                if(prevState.ccdata != null &&  Object.keys(prevState.ccdata).length !== Object.keys(updatedCC.ccdata).length){
                        this.setState({ ccdata: updatedCC.ccdata })                    
                }
            })
            .catch(error => {
                throw(error);
            })    
       }    
      }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
      } 

      handleCCChange = (event) => {
        this.setState({ccno: event.target.value});
      } 

      handleLimitChange = (event) => {
        this.setState({limit: event.target.value});
      } 

      onSubmit = () => {
          const { name , ccno , limit } = this.state; 
        fetch(apiaddURL, {
            method: 'POST',           
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                Name: name,
                CCNumber: ccno,
                Limit: limit
            })
          }).then(response => response.json())
          .then(response => {    
              console.log(response)      
              if(response.error){
                  this.setState({
                      errmessage: "Please check the input value ",
                  })
              } else {
                this.setState({
                    errmessage: "Record saved successfully",
                    isFetch: true,
                    name: '',
                    ccno: '',
                    limit: '',
                })
              }
              
          })
      }

    render() {
         const { ccdata } = this.state;
         console.log('data12', ccdata);
        return (
            <React.Fragment>
                <div className="header">
                    <h1 className="coletxt">Credit Card System</h1>
                </div>
                <label className="errmsg" >{this.state.errmessage}</label>
                <div>                
                  <div className="txtfield">
                    <span>Name</span>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                 </div>    
                 <div className="txtfield">
                    <span>Credit Card Number</span>
                    <input type="text" value={this.state.ccno} onChange={this.handleCCChange} />
                 </div>    
                 <div className="txtfield">
                    <span>Limit</span>
                    <input type="text" value={this.state.limit} onChange={this.handleLimitChange} />
                 </div>    
                    <input type="submit" value="Add" className="btnsumbit" onClick={this.onSubmit} />
                </div>
                <div className="creditcardlst">
                <ul className="uldata">
                   <li className="heading">
                            <span>Name</span>
                            <span>Card no</span>
                            <span>Balance</span>
                            <span>Limit</span>                            
                     </li> 
                    { 
                        ccdata &&  Object.entries(ccdata).map(([key, val]) => (                            
                            <li key={key}>
                            <span>{val.name}</span>
                            <span>{val.cardno}</span>
                            <span>{val.balance}</span>
                            <span>{val.limit}</span>                            
                            </li>                                                                
                        ))
                    }   

                    </ul>                
                </div>
            </React.Fragment>
        )
    }
}

