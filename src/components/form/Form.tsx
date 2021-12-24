import React, { FormEvent, useState } from 'react';
import { FormInput } from '../../types/form';
import { Input } from './elements/Input';

export function Form({ input, submitter }: FormInput) {

  const [form, setForm] = useState({});

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitter(form);
  }

  return (
    <form onSubmit={submit}>
      {input.map(({ type, name }) => (
        <Input
          type={type}
          name={name}
          onChange={e => setForm({ ...form, [name]: e.target.value })} />
      ))}

      <button type="submit">Submit</button>
    </form>
  );
}