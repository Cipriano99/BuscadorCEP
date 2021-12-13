import { InputHTMLAttributes } from 'react';
import { ContainerInput } from './styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input = ({ name, label, ...props }: IInput) => {
  return (
    <ContainerInput>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} type="text" {...props} />
    </ContainerInput>
  );
};
