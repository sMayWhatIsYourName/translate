import axios from 'axios';
import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import options from '../options';
import { ITranslation } from '../interfaces/translator.interface';
import { languagesList } from '../languages/languages';

const entries = Object.entries(languagesList);
export const fetchTranslate = createAsyncThunk(
  'translator/fetch',
  async ({ text, to }: { text: string, to: string }) => {
    const currentLanguage = await axios.request(options.getDetectOpts(text));
    const translatedText = await axios.request(options.getTranslateOpts(languagesList[to], text));
    const lang = entries.find(([_key, value]) => value === currentLanguage.data.lang);
    if (lang === undefined) {
      throw new Error('Не распознанный язык')!
    }
    return {
      from: {
        text,
        lang: lang[0],
      },
      to: {
        text: translatedText.data.translated_text,
        lang: to,
      }
    };
  },
);

const parsedHistoryData = localStorage.getItem('history');
const history = parsedHistoryData ? JSON.parse(parsedHistoryData) : [];
const parsedLanguages = localStorage.getItem('languages');
const languages = parsedLanguages ? JSON.parse(parsedLanguages) : {};

const initialState: ITranslation = {
  current: {
    to: {
      lang: 'English',
      text: '',
    },
    from: {
      lang: 'Russian',
      text: '',
    },
  },
  history,
  languages,
  isLoading: false,
};

const translatorSlice = createSlice({
  name: 'translator/slice',
  initialState,
  reducers: {
    setCurrent: (state, { payload }) => {
      state.current = state.history.find((translate) => translate.id === payload) || state.current;
    },
    setLanguage: (state, { payload: { direction, lang } }) => {
      if (direction === 'to') {
        state.current.to.lang = lang;
      } else {
        state.current.from.lang = lang;
      }
    },
    replaceCurrent: (state) => {
      const beforeTo = state.current.to;
      state.current.to = state.current.from;
      state.current.from = beforeTo;
    },
    setFavorite: (state, { payload }) => {
      const historyItem = state.history.find((item) => item.id === payload);
      if (historyItem === undefined) {
        return;
      }
      historyItem.isFavorite = !historyItem.isFavorite;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTranslate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTranslate.fulfilled, (state, { payload }) => {
        state.current = payload;
        const { to, from } = payload;
        const newHistoryElement = {
          to,
          from,
          id: state.history.length,
          isFavorite: false,
        };
        state.history.push(newHistoryElement);
        state.languages[to.lang] = state.languages[to.lang] ? state.languages[to.lang] + 1 : 1;
        state.languages[from.lang] = state.languages[from.lang] ? state.languages[from.lang] + 1 : 1;
        state.isLoading = false;
      });
  }
});

export const { actions } = translatorSlice;
export default translatorSlice.reducer;