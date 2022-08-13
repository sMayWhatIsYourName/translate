import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type IconType = 'fav' | 'replace' | 'folder' | 'copy' | 'listen' | 'layer' | 'clear' | 'translate' | 'pause' | 'menu' | 'history';

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<SVGAElement>, SVGAElement> {
  type: IconType;
}