import cn from 'classnames';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { ITranslation } from '../../interfaces/translator.interface';
import { Form } from '../Form/Form';
import { Icon } from '../Icon/Icon';
import styles from './InputSection.module.scss';
import { InputSectionProps } from './InputSection.props';
import { actions } from '../../slices/translator.slice';

export const InputSection = (props: InputSectionProps): JSX.Element => {
  const { from, to } = useSelector((state: ITranslation) => state.current);
  const dispatch = useDispatch();
  const [isToOpen, setIsToOpen] = useState<boolean>(false);
  const [isFromOpen, setFromToOpen] = useState<boolean>(false);
  return (
    <main className={styles.wrapper}>
      <div className={styles.languages}>
        <button className={styles.lang}>{from.lang}</button>
        <button className={styles.replace} onClick={() => {
          dispatch(actions.replaceCurrent());
        }}>
          <Icon type='replace' />
        </button>
        <button className={styles.lang}>{to.lang}</button>
      </div>
      <Form />
    </main>
  );
}