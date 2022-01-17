import React, { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useGlobalState } from '../../app/store';
import { FilterElementInput } from '../../types/form';

type Tag = { id: number, label: string };

export function Tag({ data }: FilterElementInput) {
  // TODO make this more abstract via parameters
  const [filters, setFilters] = useGlobalState('filters');

  const onChange = (e: any) =>
    setFilters({ ...filters, [data.label]: e });

  return (
    <div className="select-tags">
      <Typeahead
        multiple
        id={data.id}
        onChange={onChange}
        options={data.values}
        placeholder="Choose item..."
        selected={filters[data.label]}
      />
    </div>
  )
}