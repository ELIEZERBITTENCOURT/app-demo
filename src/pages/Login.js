import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard/EntryCard';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Login(){
  return (
    <EntryPage>
      <PageHeader to="/">VOTE FILMES</PageHeader>
      <EntryCard>
        <h2>Login in</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor='login-email'>Email Adress</label>
            <Input type="text" placeholder="name@email.com" id="login-email"/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='login-password'>Password</label>
            <Input type="password" placeholder="Password" id="login-password"/>
          </InputGroup>
          <Button type="submit" full>Login</Button>
        </form>
        <span>
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Login;