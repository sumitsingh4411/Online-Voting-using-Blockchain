import React from 'react'
import "./Result.css";
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
function Result({candidate1,candidate2}) {
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
            <Link to="/">
      <Nav.Link href="#home">Home</Nav.Link>
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
        <h1>{candidate1.votecount}</h1>
        </div>
        <div className="id2">
        <img
        className="congress"
        src="https://bsmedia.business-standard.com/_media/bs/img/topic-profile/profile-images/thumb/464_464/1554907259.png"
        alt="Congress Logo"
        />
         <h1>CONGRESS</h1>
         <h1>{candidate2.votecount}</h1>
        </div>
        <h1 style={{marginTop:"50px"}}>total vote :{Number(candidate1.votecount)+Number(candidate2.votecount)}</h1>
    </div>
    </>
    )
}

export default Result
