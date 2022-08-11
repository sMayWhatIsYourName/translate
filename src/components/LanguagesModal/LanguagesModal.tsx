import cn from 'classnames';

import styles from './LanguagesModal.module.scss';
import { LanguagesModalProps } from './LanguagesModal.props';
import { languagesList } from '../../languages/languages';
import { createPortal } from 'react-dom';

export const LanguagesModal = ({ ...props }: LanguagesModalProps): JSX.Element => {
  return createPortal(
    <div className={styles.modal} {...props}>
      {Object.keys(languagesList).map((key) => <p onClick={() => console.log(key)
      } key={key}>{key}</p>)}
    </div>, document.getElementById("modal")!
  );
}