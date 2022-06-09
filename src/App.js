import {QueryClient, QueryClientProvider} from 'react-query'

import Countries from './components/Countries'
import './App.css'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
    </QueryClientProvider>
  );
}

export default App;
