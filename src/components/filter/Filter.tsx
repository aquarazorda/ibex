import React from 'react';

import { Input } from './elements/Input';

import { elements } from '../../data/filter.json';

export function Filter() {
  const elems = elements.map(elem => (<Input input={elem} />))

  return (
    <div>{elems}</div>
  )
}