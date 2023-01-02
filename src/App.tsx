import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DimensionProvider from './providers/DimensionProvider';
import Loader from './components/Loader';
import TextInput from './components/TextInput';
import QuotesContaienr from './components/QuotesContainer';
import { QueryClient, QueryClientProvider } from 'react-query';
import QuoteBook from './components/QuoteBook';

function App() {
  const queryClient = new QueryClient()
  //const [quotes, setQuotes] = useState<string[]>([])
  return (
    <div className="App">
      <QueryClientProvider client = {queryClient}>
        <DimensionProvider>
          <TextInput setFinalText={(t : string) => {
            //setQuotes([...quotes, t])
          }}></TextInput>

          <QuoteBook></QuoteBook>
      </DimensionProvider>
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
