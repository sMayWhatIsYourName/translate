import cn from 'classnames';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Ring } from '@uiball/loaders'

import { ITranslation } from '../../interfaces/translator.interface';
import { Icon } from '../Icon/Icon';

import styles from './Form.module.scss';
import { FormProps } from './Form.props';
import { IForm } from '../../interfaces/form.interface';
import { AppDispatch } from '../../slices';
import { fetchTranslate } from '../../slices/translator.slice';
import { LanguagesSupportList } from '../../languages/languages';

export const Form = memo((props: FormProps): JSX.Element => {
  const { from, to } = useSelector((state: ITranslation) => state.current);
  const isLoading = useSelector((state: ITranslation) => state.isLoading);
  const voices = window.speechSynthesis.getVoices();
  const toVoice = voices.filter((voice) => voice.lang === LanguagesSupportList[to.lang])[0];
  const fromVoice = voices.filter((voice) => voice.lang === LanguagesSupportList[from.lang])[0];
  // console.log(fromVoice);
    
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
              <button type='button' disabled={!fromVoice} className={styles.btn} onClick={() => {
                if (isFromSpeak) {
                  speechSynthesis.cancel();
                  setIsFromSpeak(false);
                } else if (speechSynthesis.speaking) {
                  return;
                } else {
                  const utterance = new SpeechSynthesisUtterance(text);
                  utterance.voice = fromVoice;
                  // utterance.lang = LanguagesSupportList[from.lang];
                  speechSynthesis.speak(utterance);
                  setIsFromSpeak(true);
                  utterance.addEventListener('end', () => {
                    setIsFromSpeak(false);
                  })
                }
              }}>
                {isFromSpeak ? <Icon type='pause' /> : <Icon type='listen' />}
              </button>
            </div>
          </div>
        </div>
        <div className={cn(styles.field, styles.mAuto)}>
          {
            isLoading
              ?
              <div className={styles.loader}>
                <Ring size={45} color="#7961FB" />
              </div>
              :
              <div className={styles.result}>{to.text}</div>
          }
          <div className={styles.wrapperResult}>
            <div className={styles.inner}>
              <button type='button' className={styles.btn} onClick={() => {
                if (to.text.length > 0) {
                  navigator.clipboard.writeText(to.text);
                }
              }}>
                <Icon type='copy' />
              </button>
              <button type='button' disabled={!toVoice} className={styles.btn} onClick={() => {
                if (isToSpeak) {
                  speechSynthesis.cancel();
                  setIsToSpeak(false);
                } else if (speechSynthesis.speaking) {
                  return;
                } else {
                  const utterance = new SpeechSynthesisUtterance(to.text);
                  utterance.voice = toVoice;
                  utterance.lang = LanguagesSupportList[to.lang];
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