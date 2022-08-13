import cn from 'classnames';

import styles from './LanguagesModal.module.scss';
import { LanguagesModalProps } from './LanguagesModal.props';
import { languagesList } from '../../languages/languages';
import { createPortal } from 'react-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ISearch } from '../../interfaces/search.interface';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices/translator.slice';
import { Icon } from '../Icon/Icon';

export const LanguagesModal = ({ current, close, forLang, ...props }: LanguagesModalProps): JSX.Element => {
  const { register, setFocus, handleSubmit, watch } = useForm<ISearch>({ defaultValues: { search: '' } });
  const languages = Object.keys(languagesList);
  const dispatch = useDispatch();
  const typedLang = watch('search').toLowerCase();
  const filtered = languages.filter((lang) => lang.toLowerCase().includes(typedLang));
  const onSubmit: SubmitHandler<ISearch> = ({ search }) => {
    // dispatch(fetchTranslate({ to: to.lang, text }));
    if (filtered.length > 0) {
      const lang = filtered[0];
      dispatch(actions.setLanguage({ direction: forLang, lang }));
      close(false);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 770) {
      setFocus('search');
    }
  });
  return createPortal(
    <div className={styles.modal}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...props}>
        <input type="text" placeholder='Search language' className={styles.search} {...register('search', { required: true, minLength: 1 })} />
        <button type='button' onClick={() => close(false)} className={styles.clearBtn}>
          <Icon type='clear' />
        </button>
      </form>
      <div className={styles.wrapper}>
        {
          filtered.length === 0
            ?
            <p className={styles.err}>No results</p>
            :
            filtered.map((key) => (
              <button className={cn(styles.lang, {
                [styles.chosen]: current === key,
              })} onClick={() => {
                if (key !== current) {
                  dispatch(actions.setLanguage({ direction: forLang, lang: key }));
                }
                close(false);
              }} key={key}>
                {key}
              </button>
            ))
        }
      </div>
    </div>, document.getElementById("modal")!
  );
};