import cn from 'classnames';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { Category } from '../Category/Category';
import { ITranslation } from '../../interfaces/translator.interface';
import { useSelector } from 'react-redux';

export const Header = ({ visible, ...props }: HeaderProps): JSX.Element => {
  const { history, languages } = useSelector((state: ITranslation) => state);
  const favCount = history.filter((lang) => lang.isFavorite).length;
  return (
    <header className={cn(styles.header, {
      [styles.visible]: visible,
    })} {...props}>
      <div>
        <h2 className={styles.headling}>Types</h2>
        <ul className={styles.list}>
          <Category icon='layer' name='All items' count={history.length} />
          <Category icon='fav' name='Favorites' count={favCount} />
        </ul>
      </div>
      {
        history.length > 0
          ?
          <div>
            <h2 className={styles.headling}>Languages</h2>
            <ul className={cn(styles.list, styles.languages)}>
              {Object.entries(languages).map(([lang, count]) => <Category icon='folder' key={lang} name={lang} count={count} />)}
            </ul>
          </div>
          :
          null
      }
    </header >
  );
};