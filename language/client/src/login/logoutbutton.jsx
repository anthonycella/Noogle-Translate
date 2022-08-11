/* eslint-disable react/button-has-type */
import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { logout } = useAuth0();
  return (
    <LoginButtonComponent onClick={() => logout({ returnTo: window.location.origin })} className="ignore">
      Logout
    </LoginButtonComponent>
  );
}

const LoginButtonComponent = styled.div`
  &:hover {
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    color: #db3236;
    border: 1px solid #db3236;
    transition: all 0.1s ease-in-out;
  }
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: #ddd;
  border: 1px solid black;
  height: 25px;
  width: 50px;
  position: absolute;
  top: 50px;
  right: 50px;
`;

export default LoginButton;
