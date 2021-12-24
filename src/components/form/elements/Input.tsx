import React from 'react';
import { FormElementInput } from '../../../types/form';

export function Input({ data }: FormElementInput) {

  return (
    <input type={data.type} onChange={data.onChange} />
  );
}