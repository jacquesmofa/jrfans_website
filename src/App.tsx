import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import SeoSync from './components/feature/SeoSync';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={__BASE_PATH__}>
        <SeoSync />
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;