import React from 'react';
import { Form } from '../form/Form';
import { FormData } from '../../types/form';
import filterData from '../../data/filter.json';

export function Filter() {
  const submit = (data: FormData) => {
    console.log("TODO handle data");
  };

  return (
    <div>
      <h1>Filter</h1>
      <Form data={filterData.data} submitter={submit} />
    </div>
  );
}