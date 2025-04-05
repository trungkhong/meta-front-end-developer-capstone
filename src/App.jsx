import { lazy, Suspense } from 'react';

import Loading from '@/components/common/Loading';

import './App.css';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
