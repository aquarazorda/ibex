import React from 'react';
import { Form } from '../form/Form';
import { FormData } from '../../types/form';
import LoginData from '../../data/login.json';

export function Login() {
  const submit = (data: FormData) => {
    console.log("TODO handle data");
  };

  return (
    <div>
      <h1>Login</h1>
      <Form data={LoginData.data} submitter={submit} />
    </div>
  );
}