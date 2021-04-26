// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const KYC_ABI=[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "name": "KycRequests",
    "outputs": [
      {
        "name": "userName",
        "type": "string"
      },
      {
        "name": "data_hash",
        "type": "string"
      },
      {
        "name": "bank",
        "type": "address"
      },
      {
        "name": "isAllowed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x15df18bd"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "name": "finalcustomers",
    "outputs": [
      {
        "name": "userName",
        "type": "string"
      },
      {
        "name": "data_hash",
        "type": "string"
      },
      {
        "name": "password",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x320ad4c7"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "banks",
    "outputs": [
      {
        "name": "bank_name",
        "type": "string"
      },
      {
        "name": "ethAddress",
        "type": "address"
      },
      {
        "name": "regNumber",
        "type": "string"
      },
      {
        "name": "bankRating",
        "type": "uint256"
      },
      {
        "name": "KycCount",
        "type": "uint256"
      },
      {
        "name": "bankUpvotes",
        "type": "uint256"
      },
      {
        "name": "validatorBank",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x80c3b8c2"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "name": "customers",
    "outputs": [
      {
        "name": "userName",
        "type": "string"
      },
      {
        "name": "data_hash",
        "type": "string"
      },
      {
        "name": "upvotes",
        "type": "uint256"
      },
      {
        "name": "bank",
        "type": "address"
      },
      {
        "name": "customerRating",
        "type": "uint256"
      },
      {
        "name": "password",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa82c98d0"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "upVotes",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xd412e681"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "bank",
        "type": "address"
      }
    ],
    "name": "RequestDenied",
    "type": "event",
    "signature": "0x25ae2ca462f1548b303ab3c4ae47569bac245b50ececc06a66a15ff84cc6bcfa"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_bankName",
        "type": "string"
      },
      {
        "name": "_bankAddress",
        "type": "address"
      },
      {
        "name": "_regNo",
        "type": "string"
      }
    ],
    "name": "addBank",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xccfa8e71"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      },
      {
        "name": "_customerData",
        "type": "string"
      }
    ],
    "name": "addCustomer",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x3190abc0"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      },
      {
        "name": "_customerData",
        "type": "string"
      }
    ],
    "name": "addKycRequest",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xd4a46c51"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "removeKycRequest",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x734ae8a3"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "upVoteCustomer",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x569e64bc"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      },
      {
        "name": "_customerData",
        "type": "string"
      }
    ],
    "name": "addCustomerToFinalCustomerList",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2139326b"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "removeCustomer",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xfc55ea9d"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      },
      {
        "name": "_password",
        "type": "string"
      },
      {
        "name": "_customerData",
        "type": "string"
      }
    ],
    "name": "modifyCustomer",
    "outputs": [
      {
        "name": "",
        "type": "uint16"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xa18dce7b"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getKycRequestCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x59387b77"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_bankAddress",
        "type": "address"
      }
    ],
    "name": "getBankRequest",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa24ba552"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "viewCustomer",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x107925bb"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTotalBanks",
    "outputs": [
      {
        "name": "count",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x11c98815"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_bankAddress",
        "type": "address"
      }
    ],
    "name": "upVoteBank",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xccb6b0d2"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "getCustomerRating",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8eafe0f0"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_bankAddress",
        "type": "address"
      }
    ],
    "name": "getBankRating",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xb8144a72"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      }
    ],
    "name": "getAccessHistory",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x8117eada"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_password",
        "type": "string"
      }
    ],
    "name": "getPasswordLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function",
    "signature": "0xd116c422"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_userName",
        "type": "string"
      },
      {
        "name": "_password",
        "type": "string"
      }
    ],
    "name": "setPassword",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xca386496"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_bankAddress",
        "type": "address"
      }
    ],
    "name": "getBankDetails",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x15101e02"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_bankAddress",
        "type": "address"
      }
    ],
    "name": "removeBank",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x9649650c"
  }
]

const KYC_Address = '0x909E1fE1cE664A3f635aE355cB64318971e40BfD';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// const { KYC_ABI, KYC_Address } =require ('./config');
const express = require('express');
const Web3 = require('web3');
const web3 = new Web3('http://localhost:7545')
const app = express();

const port = process.env.port || 4000;

let accounts= [];
let kyc= {};

app.get('/', (req,res)=> res.send('API running'));

app.listen(port, ()=> console.log(`Server started on ${port}`))

app.get('/deployContract', async (req,res)=>{
  try{
    kyc = new web3.eth.Contract(KYC_ABI, KYC_Address);    //Disable this contract function call once deployed----
    accounts = await web3.eth.getAccounts();
    res.status(200).send('Contract deployed');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})

app.post('/addBank', async(req,res)=>{
  try{
    const resp= await kyc.methods.addBank(req.query.bankname, accounts[1] , req.query.regno).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getTotalBanks', async(req,res)=>{
  try{
    const resp= await kyc.methods.getTotalBanks().call();
    res.status(200).send("Total number of banks",resp);
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/addCustomer', async(req,res)=>{
  try{
    const resp= await kyc.methods.addCustomer(req.query.userName, req.query.customerData).call();
    res.status(200).send('Customer added', resp);
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/addCustomerToFinalCustomerList', async(req,res)=>{
  try{
    const resp= await kyc.methods.addCustomerToFinalCustomerList(req.query.userName, req.query.customerData).call();
    res.status(200).send('Customer added to final list');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/addKycRequest', async(req,res)=>{
  try{
    const resp= await kyc.methods.addKycRequest(req.query.userName, req.query.customerData).call();
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/removeKycRequest', async(req,res)=>{
  try{
    const resp= await kyc.methods.removeKycRequest(req.query.userName).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/upVoteCustomer', async(req,res)=>{
  try{
    const resp= await kyc.methods.upVoteCustomer(req.query.userName).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/removeCustomer', async(req,res)=>{
  try{
    const resp= await kyc.methods.removeCustomer(req.query.userName).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/modifyCustomer', async(req,res)=>{
  try{
    const resp= await kyc.methods.modifyCustomer(req.query.userName, req.query.password, req.query.customerData).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getKycRequestCount', async(req,res)=>{
  try{
    const resp= await kyc.methods.getKycRequestCount().call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getBankRequest', async(req,res)=>{
  try{
    const resp= await kyc.methods.getBankRequest(req.query.bankAddress).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/viewCustomer', async(req,res)=>{
  try{
    const resp= await kyc.methods.viewCustomer(req.query.userName).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/upVoteBank', async(req,res)=>{
  try{
    const resp= await kyc.methods.upVoteBank(req.query.bankAddress).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getCustomerRating', async(req,res)=>{
  try{
    const resp= await kyc.methods.getCustomerRating(req.query.userName).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getBankRating', async(req,res)=>{
  try{
    const resp= await kyc.methods.getBankRating(req.query.bankAddress).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getAccessHistory', async(req,res)=>{
  try{
    const resp= await kyc.methods.getAccessHistory(req.query.userName).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/setPassword', async(req,res)=>{
  try{
    const resp= await kyc.methods.setPassword(req.query.userName, req.query.password).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/getBankDetails', async(req,res)=>{
  try{
    const resp= await kyc.methods.getBankDetails(req.query.bankAddress).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
app.get('/removeBank', async(req,res)=>{
  try{
    const resp= await kyc.methods.removeBank(req.query.bankAddress).call();
    console.log(resp);
    res.status(200).send('Bank added');
  }
  catch(err){
    console.log(err);
    res.status(500).send('Server Error');
  }
})
