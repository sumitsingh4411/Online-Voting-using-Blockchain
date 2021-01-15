import React, { useState } from 'react'
import "./Vote.css"
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
function Vote({candidate1,candidate2,Elect,account}) {
    console.log(Elect);
    const[candidate,setcandidate]=useState('');
    const eid=Elect.id;
    const vote=async(eid)=>{
      await Elect.
      methods.vote(eid).
      send({from:account})
      .on('transactionhash',()=>{
          alert("success");
      })
    }
    const votedornot=async(account)=>{
      await Elect.
      methods.votedornot(account).
      send({from:account})
      .on('transactionhash',()=>{
          alert("success");
      })
    }
    const bjpvote=(e)=>{
        e.preventDefault();
        if(!votedornot(account))
        {
        vote(1);
        alert("you have successfully voted");
        }
        else
        {
          alert("you have already voted");
        }
    }
    const congvote=(e)=>{
        e.preventDefault();
        if(!votedornot(account))
        {
        vote(1);
        alert("you have successfully voted");
        }
        else
        {
          alert("you have already voted");
        }
    }
    return (
        <>
        <Navbar bg="light" variant="primary">
        <Navbar.Brand href="https://en.wikipedia.org/wiki/Election_Commission_of_India">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/en/a/ac/Election_Commission_of_India_Logo.png"
            width="35"
            height="35"
            className="d-inline-block align-top"
          />{' '}
          Election commision of India
        </Navbar.Brand>
        <Nav className="mr-auto">
            <Link to="/Result/">
      <Nav.Link href="#home">Check Result</Nav.Link>
        </Link>
      
      </Nav>
      </Navbar>
        <div className="vote">
            <div className="id1">
             <img
             className="BJP"
             src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Bharatiya_Janata_Party_logo.svg/1200px-Bharatiya_Janata_Party_logo.svg.png"
             alt="BJP logo"
             />
             <h1>BJP</h1>
             <Button variant="primary" size="lg"
              className="btn"
              onClick={bjpvote}
             >Vote BJP</Button>
            </div>
            <div className="id2">
            <img
            className="congress"
            src="https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/464_464/1554907259.png"
            alt="Congress Logo"
            />
             <h1>CONGRESS</h1>
             <Button variant="primary" size="lg"
              className="btn"
              onClick={congvote}
             >Vote Congress</Button>
            </div>
        </div>
        </>
    )
}

export default Vote
