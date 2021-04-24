import './App.css';
import React ,{ Component } from 'react';
import Web3 from 'web3';

class App extends Component {
  componentWillMount(){
    this.loadBlockchainData();
  }
  async loadBlockchainData(){
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    this.setState({account:accounts[0], network:network, balance: balance});
  }

  constructor(props){
    super(props);
    this.state={account:'', network:'', balance: ''};
  }
  render(){
  return (
    <div className="container">
      <h1>Hello World.</h1>
      <p>Your account: {this.state.account}</p>
      <p>Your network: {this.state.network}</p>
      <p>Your balance: {this.state.balance}</p>
    </div>
  );
  }
}

export default App;
