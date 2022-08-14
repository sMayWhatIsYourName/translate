import cn from 'classnames';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';

import { ITranslation } from '../../interfaces/translator.interface';
import { Icon } from '../Icon/Icon';

import styles from './Form.module.scss';
import { FormProps } from './ChooseLanguage.props';
import { IForm } from '../../interfaces/form.interface';
import { AppDispatch } from '../../slices';
import { fetchTranslate } from '../../slices/translator.slice';

export const Form = memo((props: FormProps): JSX.Element => {
  const { from, to } = useSelector((state: ITranslation) => state.current);
  const [isToSpeak, setIsToSpeak] = useState(false);
  const [isFromSpeak, setIsFromSpeak] = useState(false);
  const { register, setFocus, handleSubmit, watch, resetField, setValue } = useForm<IForm>({ defaultValues: { text: from.text } });
  const text = watch('text');
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit: SubmitHandler<IForm> = ({ text }) => {
    dispatch(fetchTranslate({ to: to.lang, text }));
  };
  useEffect(() => {
    setFocus('text');
  })
  useEffect(() => {
    setValue('text', from.text);
  }, [from.text])
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} {...props}>
      <div className={styles.translationWrapper}>
        <div className={cn(styles.field, styles.m10)}>
          <textarea spellCheck={false} className={styles.input} {...register('text', { required: true })}></textarea>
          <div className={styles.outter}>
            {
              text.length > 0
                ?
                <button type='button' className={styles.btn} onClick={() => {
                  resetField('text');
                  speechSynthesis.cancel();
                }} >
                  <Icon type='clear' />
                </button>
                :
                null
            }
            <div className={styles.inner}>
              <button type='button' className={styles.btn} onClick={() => {
                navigator.clipboard.writeText(text);
              }}>
                <Icon type='copy' />
              </button>
              <button type='button' className={styles.btn} onClick={() => {
                if (speechSynthesis.speaking) {
                  return;
                }
                if (isFromSpeak) {
                  speechSynthesis.cancel();
                  setIsFromSpeak(false);
                } else {
                  const voices = speechSynthesis.getVoices();
                  const utterance = new SpeechSynthesisUtterance(text);
                  utterance.voice = voices[0];
                  utterance.lang = 'ru';
                  speechSynthesis.speak(utterance);
                  setIsFromSpeak(true);
                  utterance.addEventListener('end', () => {
                    setIsFromSpeak(false);
                  })
                }
              }}>
                {isFromSpeak ? <Icon type='pause' /> : <Icon type='listen' /> }
              </button>
            </div>
          </div>
        </div>
        <div className={cn(styles.field, styles.mAuto)}>
          <div className={styles.result}>{to.text}</div>
          <div className={styles.wrapperResult}>
            <div className={styles.inner}>
              <button type='button' className={styles.btn} onClick={() => {
                if (to.text.length > 0) {
                  navigator.clipboard.writeText(to.text);
                }
              }}>
                <Icon type='copy' />
              </button>
              <button type='button' className={styles.btn} onClick={() => {
                if (speechSynthesis.speaking) {
                  return;
                }
                if (isToSpeak) {
                  speechSynthesis.cancel();
                  setIsToSpeak(false);
                } else {
                  const voices = speechSynthesis.getVoices();
                  const utterance = new SpeechSynthesisUtterance(to.text);
                  utterance.voice = voices[0];
                  utterance.lang = 'ru';
                  speechSynthesis.speak(utterance);
                  setIsToSpeak(true);
                  utterance.addEventListener('end', () => {
                    setIsToSpeak(false);
                  })
                }
              }}>
                {isToSpeak ? <Icon type='pause' /> : <Icon type='listen' />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnWrapper}>
        <button type='submit' className={cn(styles.btn, styles.translate)}>
          <Icon type='translate' />
        </button>
      </div>
    </form>
  );
})