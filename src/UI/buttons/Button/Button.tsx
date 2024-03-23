import { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';
import cn from 'classnames';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  appearence?: 'small' | 'big';
}

export const Button = ({
  children,
  className,
  appearence = 'small',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(s['button'], className, {
        [s['small']]: appearence === 'small',
        [s['big']]: appearence === 'big',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
