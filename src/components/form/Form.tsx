import React, { FormEvent, useState } from 'react';
import { match } from 'ts-pattern';
import { FormElementItem, FormInput } from '../../types/form';
import { Input } from './elements/Input';
import { Suggestion } from './elements/Suggestion';

export function Form({ data, submitter }: FormInput) {

  const [form, setForm] = useState({});

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitter(form);
  }

  const genOnChange = (el: FormElementItem): FormElementItem =>
    ({ ...el, onChange: (e: any) => setForm({ ...form, [el.name]: e.target.value }) })

  const elems = data.map((el) => {
    const item = genOnChange(el);

    return match(item.component)
      .with("input", () => <Input data={item} />)
      .with("typeahead", () => <Suggestion data={item} />)
      .otherwise(() => console.log(`Invalid component name ${el.component}`))
  });

  return (
    <form onSubmit={submit}>
      {elems}

      <button type="submit">Submit</button>
    </form>
  );
}