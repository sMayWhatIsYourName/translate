import { memo } from 'react';
import { IconProps } from './Icon.props'

export const Icon = memo(({ type }: IconProps): JSX.Element => {
  switch (type) {
    case 'fav':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M20.66,12.34l-7.95,8a1,1,0,0,1-1.42,0L3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z"></path></svg>);
    case 'folder':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M2,5V19a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2H13.67a2,2,0,0,1-1.2-.4L9.53,3.4A2,2,0,0,0,8.33,3H4A2,2,0,0,0,2,5Z"></path></svg>);
    case 'copy':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="36" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<rect x="2" y="2" width="14" height="14" rx="2"></rect><path d="M20,22H10a2,2,0,0,1-2-2V16h6a2,2,0,0,0,2-2V8h4a2,2,0,0,1,2,2V20A2,2,0,0,1,20,22Z"></path></svg>);
    case 'listen':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="36" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M2,10v4a2,2,0,0,0,2,2H5.36a2,2,0,0,1,1.16.37l4.9,3.5A1,1,0,0,0,13,19.06V4.94a1,1,0,0,0-1.58-.81l-4.9,3.5A2,2,0,0,1,5.36,8H4A2,2,0,0,0,2,10Z"></path><path d="M17.12,9.88a3,3,0,0,1,0,4.24"></path></svg>);
    case 'layer':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polygon points="3 7 12 2 21 7 12 12 3 7"></polygon><polyline points="21 12 12 17 3 12"></polyline><polyline points="21 17 12 22 3 17"></polyline></svg>);
    case 'replace':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="8 7 3 12 8 17"></polyline><polyline points="16 17 21 12 16 7"></polyline></svg>);
    case 'clear':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="15" y1="15" x2="9" y2="9"></line></svg>);
    case 'pause':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<rect x="5" y="5" width="5" height="14" rx="2"></rect><rect x="14" y="5" width="5" height="14" rx="2"></rect></svg>);
    case 'menu':
      return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<line x1="21" x2="3" y1="18" y2="18"></line><line x1="21" x2="3" y1="12" y2="12"></line><line x1="21" x2="3" y1="6" y2="6"></line></svg>);
    case 'translate':
      return (<svg xmlns="http://www.w3.org/2000/svg" height="40" width="40"><path fill="#ffffff" d="m19.917 34 6.333-16.792h2.875L35.542 34h-2.917l-1.5-4.333h-6.75L22.833 34Zm5.291-6.792h4.959l-2.417-6.875h-.125ZM8.875 29.792l-2-2L14 20.708q-1.292-1.458-2.312-3.041-1.021-1.584-1.771-3.25h2.958q.625 1.208 1.333 2.208.709 1 1.667 2.125 1.583-1.708 2.604-3.437 1.021-1.73 1.729-3.688h-15.5V8.792H14.5V6h2.792v2.792h9.791v2.833H23q-.708 2.417-1.979 4.75-1.271 2.333-3.146 4.375l3.375 3.458-1.042 2.834-4.333-4.25Z" /></svg>);
    case 'history':
      return (<svg height="36" viewBox="0 0 48 48" fill="#ffffff" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none" /><path d="M25.99 6c-9.95 0-17.99 8.06-17.99 18h-6l7.79 7.79.14.29 8.07-8.08h-6c0-7.73 6.27-14 14-14s14 6.27 14 14-6.27 14-14 14c-3.87 0-7.36-1.58-9.89-4.11l-2.83 2.83c3.25 3.26 7.74 5.28 12.71 5.28 9.95 0 18.01-8.06 18.01-18s-8.06-18-18.01-18zm-1.99 10v10l8.56 5.08 1.44-2.43-7-4.15v-8.5h-3z"/></svg>);
    default:
      throw new Error('Неизвестная иконка!');
  }
});