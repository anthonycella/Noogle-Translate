import React from 'react';
import styled from 'styled-components';

function ContributionButton({ popUpAModal }) {
  return (
    <ContributeComponent onClick={popUpAModal}>
      Write a Contribution
    </ContributeComponent>
  );
}

const LoginButtonComponent = styled.div`
  &:hover {
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    color: #3cba54;
    border: 1px solid #3cba54;
    transition: all 0.1s ease-in-out;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #ddd;
  border: 1px solid black;
  height: 25px;
  width: 50px;
  padding: 3px;
`;

const ContributeComponent = styled.div`
  &:hover {
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    color: #4885ed;
    border: 1px solid #4885ed;
    transition: all 0.2s ease-in-out;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #ddd;
  border: 1px solid black;
  height: 25px;
  width: 150px;
  padding: 3px;
  font-size: 18px;
  margin: 25px;
`;

export default ContributionButton;
