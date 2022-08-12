import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from 'react';

export interface LanguagesModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  current: string;
  close: Dispatch<SetStateAction<boolean>>;
  forLang: string;
}