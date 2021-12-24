export interface InputType {
  type: string;
  name: string;
  onChange?: (event: FormEvent<HTMLFormElement>) => void;
}

export interface FormInput {
  input: InputType[],
  submitter: (event: FormEvent<HTMLFormElement>) => void;
};

export type FormData = Record<string, any>;