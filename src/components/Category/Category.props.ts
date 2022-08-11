import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IconType } from '../Icon/Icon.props';

export interface CategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  name: string;
  count: number;
  icon: IconType;
}