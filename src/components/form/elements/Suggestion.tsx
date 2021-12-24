import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FormElementInput } from '../../../types/form';

export function Suggestion({ data }: FormElementInput) {
  const [value, setValue] = useState(data.value);

  data.typeahead ??= [];

  return (
    <div>
      <Typeahead
        multiple
        id={data.id}
        onChange={setValue}
        options={data.typeahead}
        placeholder="Choose item..."
        selected={value}
      />
    </div>
  )
}