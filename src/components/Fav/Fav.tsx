import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { memo } from 'react';

import styles from './Fav.module.scss';
import { FavProps } from './Fav.props'
import { actions } from '../../slices/translator.slice';

export const Fav = memo(({ type = 'inactive', historyId }: FavProps): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <button className={cn(styles.btn, {
      [styles.active]: type === 'active',
    })} onClick={(e) => {
      dispatch(actions.setFavorite(historyId));
      e.stopPropagation();
    }} >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<path d="M20.66,12.34l-7.95,8a1,1,0,0,1-1.42,0L3.34,12.34a4.59,4.59,0,0,1,0-6.49l.09-.08a4.59,4.59,0,0,1,5.73-.62l3.05,2,2.59-1.8a4.61,4.61,0,0,1,5.86.53h0A4.59,4.59,0,0,1,20.66,12.34Z"></path></svg>
    </button>
  );
});