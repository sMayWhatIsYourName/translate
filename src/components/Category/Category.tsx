import cn from 'classnames';

import styles from './Category.module.scss';
import { CategoryProps } from './Category.props';
import { Icon } from '../Icon/Icon';
import { memo, useContext } from 'react';
import { CategoryContext, CloseModalContext } from '../../contexts';

export const Category = memo(({ name, count, icon, ...props }: CategoryProps): JSX.Element => {
  const { category, setCategory } = useContext(CategoryContext);
  const { close } = useContext(CloseModalContext);
  return (
    <li className={cn(styles.wrapper, {
      [styles.chosen]: category === name,
    })} onClick={() => {
      setCategory(name);
      close();
    }} {...props}>
      <Icon type={icon} />
      <p className={styles.name}>{name}</p>
      <span className={styles.count}>{count}</span>
    </li>
  );
});