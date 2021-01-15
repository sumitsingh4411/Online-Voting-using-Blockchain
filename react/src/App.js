import logo from './logo.svg';
import './App.css';
import Web3 from "web3";
import React,{useEffect, useState,} from "react";
import Election from "./contracts/Election.json";
import Vote from './Vote';
import { Route, Switch } from 'react-router-dom';
import Result from './Result';
function App() {
  const [loading2, setloading2] = useState(false);
  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [Elect, setElect] = useState({});
  const [refresh, setrefresh] = useState(0);
  const[candidate1,setcandidate1]=useState('');
  const[candidate2,setcandidate2]=useState('');
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();

    // if (refresh == 1) {
    //   setrefresh(0);
    //   loadBlockchainData();
    // }
  }, []);
  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };
  
  const loadBlockchainData = async () => {
     setLoading(true);
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      return;
    }

     setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    const networkData = Election.networks[networkId];
    if (networkData) {
      const election = new web3.eth.Contract(Election.abi, networkData.address);
      console.log(election);
      const cand1= await election.methods.Candidates(1).call();
      setcandidate1(cand1);
      const cand2= await election.methods.Candidates(2).call();
      setcandidate2(cand2);
      setElect(election);
      setLoading(false);
    } else {
      window.alert("the contract not deployed to detected network.");
      setloading2(true);
    }
  };
  if(loading)
  {
    <div>
      loading...
    </div>
  }
  return (
    <div >
      <Switch>
        <Route path="/Result/">
          <Result candidate1={candidate1} candidate2={candidate2}/>
         </Route>
        <Route path="/">
        <Vote account={account} candidate1={candidate1} candidate2={candidate2} Elect={Elect}/> 
        </Route>
        
      </Switch>
     
    </div>
  );
}

export default App;
