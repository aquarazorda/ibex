import React from 'react';
import { InputType } from '../../../types/form';

export function Input({ type, onChange }: InputType) {
  return (
    <input type={type} onChange={onChange} />
  );
}