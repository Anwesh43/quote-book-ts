import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DimensionProvider from './providers/DimensionProvider';
import Loader from './components/Loader';
import TextInput from './components/TextInput';
import QuotesContaienr from './components/QuotesContainer';

function App() {
  const [quotes, setQuotes] = useState<string[]>([])
  return (
    <div className="App">
      <DimensionProvider>
        <TextInput setFinalText={(t : string) => {
          setQuotes([...quotes, t])
        }}></TextInput>
        <QuotesContaienr quotes={quotes}></QuotesContaienr>
        <Loader x = {300} y = {300} ></Loader>
      </DimensionProvider>
    </div>
  );
}

export default App;
