import cn from 'classnames';
import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ITranslation } from '../../interfaces/translator.interface';
import { Form } from '../Form/Form';
import { Icon } from '../Icon/Icon';
import styles from './InputSection.module.scss';
import { InputSectionProps } from './InputSection.props';
import { actions } from '../../slices/translator.slice';
import { LanguagesModal } from '../LanguagesModal/LanguagesModal';

export const InputSection = memo((props: InputSectionProps): JSX.Element => {
  const { from, to } = useSelector((state: ITranslation) => state.current);
  const dispatch = useDispatch();
  const [isToOpen, setIsToOpen] = useState<boolean>(false);
  const [isFromOpen, setIsFromOpen] = useState<boolean>(false);
  return (
    <main className={styles.wrapper} {...props}>
      <div className={styles.languages}>
        <button className={styles.lang} onClick={() => {
          setIsFromOpen((current) => !current);
        }}>{from.lang}</button>
        <button className={styles.replace} onClick={() => {
          dispatch(actions.replaceCurrent());
        }}>
          <Icon type='replace' />
        </button>
        <button className={styles.lang} onClick={() => {
          setIsToOpen((current) => !current);
        }}>{to.lang}</button>
      </div>
      <Form />
      {isToOpen || isFromOpen ? <LanguagesModal forLang={isToOpen ? 'to' : 'from'} current={isToOpen ? to.lang : from.lang} close={isToOpen ? setIsToOpen : setIsFromOpen} /> : null}
    </main>
  );
});