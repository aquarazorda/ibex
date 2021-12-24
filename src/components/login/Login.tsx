import React from 'react';
import { Form } from '../form/Form';
import { elements } from '../../data/login.json';
import { FormData } from '../../types/form';

export function Login() {
  const submit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Login</h1>
      <Form input={elements} submitter={submit} />
    </div>
  );
}