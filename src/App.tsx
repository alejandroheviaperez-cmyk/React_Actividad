import React, { useEffect } from 'react';
import { IonApp, setupIonicReact } from '@ionic/react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ClientsPage from './pages/ClientsPage';
import NewClientPage from './pages/NewClientPage';
import AboutPage from './pages/AboutPage';
import { testSupabaseConnection } from './config/supabase';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();

const App: React.FC = () => {
  useEffect(() => {
    testSupabaseConnection();
  }, []);

  return (
    <IonApp>
      <BrowserRouter>
        <Routes>
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/new-client" element={<NewClientPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/clients" replace />} />
        </Routes>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;