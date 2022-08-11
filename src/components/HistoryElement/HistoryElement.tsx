import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';

import { Icon } from '../Icon/Icon';
import { Fav } from '../Fav/Fav';
import styles from './HistoryElement.module.scss';
import { HistoryProps } from './HistoryElement.props';
import { ITranslation } from '../../interfaces/translator.interface';
import { actions } from '../../slices/translator.slice';

export const HistoryElement = memo(({ historyId, ...props }: HistoryProps): JSX.Element => {
  const history = useSelector((state: ITranslation) => state.history.find((item) => item.id === historyId));
  const dispatch = useDispatch();
  if (history === undefined) {
    return <div></div>;
  }
  const { from, to } = history;
  return (
    <article className={styles.element} onClick={() => {
      dispatch(actions.setCurrent(historyId));
    }} {...props}>
      <p className={cn(styles.from, styles.text)}>{from.text}</p>
      <p className={styles.text}>{to.text}</p>
      <div className={styles.outter}>
        <div className={styles.inner}>
          <span className={styles.lang}>{from.lang}</span>
          <Icon type='replace' />
          <span className={styles.lang}>{to.lang}</span>
        </div>
        <Fav type={history.isFavorite ? 'active' : 'inactive'} historyId={historyId} />
      </div>
    </article>
  );
});