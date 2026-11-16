import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Navbar from '../components/Navbar';

const AboutPage: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding">
        <div className="container mt-4">
          <h2>Sobre el Proyecto</h2>
          <p className="lead mt-3">
            Esta aplicación web permite gestionar una base de datos de clientes conectada en
            tiempo real a Supabase mediante React, TypeScript y Bootstrap.
          </p>

          <div className="row mt-4 align-items-center">
            <div className="col-md-6 mb-4">
              <h5>Imagen del proyecto (.webp)</h5>
              <img
                src="/proyecto.webp"
                alt="Gestión de clientes y base de datos"
                className="img-fluid rounded shadow"
              />
            </div>

            <div className="col-md-6 mb-4">
              <h5>Vídeo explicativo (YouTube)</h5>
              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Vídeo de YouTube"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AboutPage;