import { string } from "fp-ts";

export interface FormElementItem {
  id: number | string;
  component: string;  // 'input' | 'typeahead';
  type: string; // 'text' | 'password' | 'input'
  name: string;
  label: string;
  value: any; // string | number | any[]
  typeahead?: any[];
  onChange?: (event: FormEvent<HTMLFormElement>) => void;
};

export interface FormElementInput {
  data: FormElementItem;
};

export interface FormInput {
  data: FormElementItem[];
  submitter: (event: FormEvent<HTMLFormElement>) => void;
};

export type FormData = Record<string, any>;