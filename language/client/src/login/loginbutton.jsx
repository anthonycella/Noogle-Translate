/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import LoginText from './logintext';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <LoginButtonComponent onClick={() => loginWithRedirect()} className="ignore">
      Login
    </LoginButtonComponent>
  );
}

const LoginButtonComponent = styled.div`
  &:hover {
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    color: #3cba54;
    border: 1px solid #3cba54;
    transition: all 0.2s ease-in-out;
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
  position: absolute;
  top: 50px;
  right: 50px;
`;

export default LoginButton;
