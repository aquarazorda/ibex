import React, { useState } from 'react';
import { MenuItem, Typeahead } from 'react-bootstrap-typeahead';

export interface InputItem {
  id: string,
  type: string,
  label: string,
  value: any[],
  typeahead: any[]
}

interface Props {
  input: InputItem
}

export function Input({ input }: Props) {
  const [value, setValue] = useState(input.value);

  return (
    <div>
      <Typeahead
        multiple
        id={input.id}
        onChange={setValue}
        options={input.typeahead}
        placeholder="Choose item..."
        selected={value}
      />
    </div>
  )
}