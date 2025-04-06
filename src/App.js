import { lazy, Suspense } from 'react';

import Loading from '@/components/common/Loading';

import { CartProvider } from '@/context/CartContext';
import './App.css';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </CartProvider>
  );
}

export default App;
