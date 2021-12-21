import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

interface InputItem {
  type: string,
  label: string,
  value: number,
  typeahead: any[]
}

interface Props {
  input: InputItem
}

export function Input(props: Props) {
  const [selections, setSelections] = useState([]);

  const update = (item: any) => setSelections(item);

  return (
    <div>
      <Typeahead
        multiple
        id="basic-typeahead-multiple"
        onChange={update}
        options={props.input.typeahead}
        placeholder="Choose several states..."
        selected={selections}
      />
    </div>
  )
}