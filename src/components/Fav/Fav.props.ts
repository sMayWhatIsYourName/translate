import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FavProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  type?: 'active' | 'inactive';
  historyId: number;
}