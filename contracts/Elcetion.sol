pragma solidity ^0.5.16;

contract Election{
    
    struct Candidate{
        int id;
        string name;
        int votecount;
    }
    
    int public Candidatecount;
    
    mapping(int=>Candidate) public Candidates;
    mapping(address=>bool) public votedornot;
    constructor() public {
        addCandidate("BJP");
        addCandidate("Congress");
    }
    event elcetionemit(
        int id,
        string name,
        int votecount
        );
    function addCandidate(string memory name) public{
        Candidatecount++;
        Candidates[Candidatecount]=Candidate(Candidatecount,name,0);
    }
      
      function vote(int id) public{
          require(!votedornot[msg.sender],"you have already voted");
          require(Candidates[id].id!=0,"id does not exist");
          Candidates[id].votecount+=1;
          votedornot[msg.sender]=true;
          emit elcetionemit(id,Candidates[id].name,Candidates[id].votecount);
      }
}