import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HistoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  historyId: number;
}