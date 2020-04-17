import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const signed = useSelector((state) => state.auth.signed);

  const Routes = createRouter(signed);

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}
