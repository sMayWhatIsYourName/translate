import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Header } from './components/Header/Header';
import { History } from './components/History/History';
import { InputSection } from './components/InputSection/InputSection';
import { ITranslation } from './interfaces/translator.interface';
import { CategoryContext } from './contexts/index';

function App() {
  const { history, languages } = useSelector((state: ITranslation) => state);
  const [category, setCategory] = useState<string>('All items');
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('history', JSON.stringify(history));
      localStorage.setItem('languages', JSON.stringify(languages));
    });
  })
  return (
    <>
      <h1 className='visually-hidden'>Text translation</h1>
      <CategoryContext.Provider value={{ category, setCategory }}>
        <Header />
        <History />
      </CategoryContext.Provider>
      <InputSection />
    </>
  );
}

export default App
