import React from 'react';
import { Link } from 'react-router-dom';
import { EntryPage, PageHeader } from './style';
import EntryCard from '../components/EntryCard/EntryCard';
import InputGroup from '../components/InputGroup/InputGroup';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Signup(){
  return (
    <EntryPage>
      <PageHeader to="/">VOTE FILMES</PageHeader>
      <EntryCard>
        <h2>Sign up</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputGroup>
            <label htmlFor="signup-name">Full Name</label>
            <Input type="text" placeholder="Name" id="signup-name"/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='signup-email'>Email Adress</label>
            <Input type="text" placeholder="name@email.com" id="signup-email"/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='signup-password'>Password</label>
            <Input type="password" placeholder="Password" id="signup-password"/>
          </InputGroup>
          <Button type="submit" full>Sign up</Button>
        </form>
        <span>
          Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </EntryCard>
    </EntryPage>
  );
}

export default Signup;