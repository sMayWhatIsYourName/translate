import cn from 'classnames';

import styles from './Category.module.scss';
import { CategoryProps } from './Category.props';
import { Icon } from '../Icon/Icon';
import { useContext } from 'react';
import { CategoryContext } from '../../contexts';

export const Category = ({ name, count, icon, ...props }: CategoryProps): JSX.Element => {
  const { category, setCategory } = useContext(CategoryContext);
  return (
    <li className={cn(styles.wrapper, {
      [styles.chosen]: category === name,
    })} onClick={() => setCategory(name)} {...props}>
      <Icon type={icon} />
      <p className={styles.name}>{name}</p>
      <span className={styles.count}>{count}</span>
    </li>
  );
}