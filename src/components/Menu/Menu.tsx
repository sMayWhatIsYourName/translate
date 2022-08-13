import cn from 'classnames';
import { useContext, useState } from 'react';

import { Icon } from '../Icon/Icon';
import styles from './Menu.module.scss';
import { MenuProps } from './Menu.props';
import { Header } from '../Header/Header';
import { History } from '../History/History';
import { CloseModalContext } from '../../contexts';

export const Menu = (props: MenuProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<null | 'menu' | 'history'>(null);
  const closeModal = () => {
    setIsOpen(null);
  }
  return (
    <div className={cn(styles.menu, {
      [styles.full]: isOpen,
    })}>
      <div className={styles.menuWrapper}>
        {
          isOpen === 'menu'
            ?
            <>
              <button className={cn(styles.mb20, styles.clear)} onClick={closeModal}>
                <Icon type='clear' />
              </button>
            </>
            :
            <button className={cn(styles.mb20, styles.categories)} onClick={() => setIsOpen('menu')}>
              <Icon type='menu' />
            </button>

        }
        {
          isOpen === 'history'
            ?
            <>
              <button className={styles.clear} onClick={closeModal}>
                <Icon type='clear' />
              </button>
            </>
            :
            <button className={styles.history} onClick={() => setIsOpen('history')}>
              <Icon type='history' />
            </button>
        }
      </div>
      <CloseModalContext.Provider value={{ close: closeModal }}>
        <div className={cn({
          [styles.content]: isOpen,
        })}>
          {
            isOpen
              ?
              isOpen === 'history'
                ?
                <History visible={true} />
                :
                <Header visible={true} />
              :
              null
          }
        </div>
      </CloseModalContext.Provider>
    </div>
  );
};