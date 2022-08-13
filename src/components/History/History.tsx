import cn from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { CategoryContext } from '../../contexts';
import { ITranslation } from '../../interfaces/translator.interface';
import { HistoryElement } from '../HistoryElement/HistoryElement';

import styles from './History.module.scss';
import { HistoryProps } from './History.props';

export const History = ({ visible, ...props }: HistoryProps): JSX.Element => {
  const { history } = useSelector((state: ITranslation) => state);
  const { category } = useContext(CategoryContext);
  const copy = [...history];
  let filtered;
  if (category === 'Favorites') {
    filtered = history
      .filter((item) => item.isFavorite)
      .reverse();
  } else if (category === 'All items') {

  }
  switch (category) {
    case 'Favorites':
      filtered = copy
        .filter((item) => item.isFavorite);
      break;
    case 'All items':
      filtered = copy;
      break;
    default:
      filtered = copy.filter((item) => item.from.lang === category || item.to.lang === category);
  }
  return (
    <div className={cn(styles.history, {
      [styles.visible]: visible,
    })} {...props}>
      {filtered
        .reverse()
        .map((item) => <HistoryElement key={item.id} historyId={item.id} />)}
    </div>
  );
};