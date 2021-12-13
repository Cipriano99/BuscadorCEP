import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styled';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

export const Button = ({ children, ...rest }: IButton) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};
