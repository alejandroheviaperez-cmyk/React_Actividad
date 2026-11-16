import React, { useEffect, useState } from 'react';
import { IonContent, IonPage } from '@ionic/react';
import Navbar from '../components/Navbar';
import { getClients } from '../services/ClienteService';
import { Client } from '../interfaces/Client';

const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadClients = async () => {
    try {
      setLoading(true);
      const data = await getClients();
      setClients(data);
    } catch (error) {
      console.error('Error cargando clientes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding">
        <div className="container mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2>Listado de Clientes</h2>
            <button className="btn btn-outline-primary btn-sm" onClick={loadClients}>
              Actualizar
            </button>
          </div>

          {loading ? (
            <p>Cargando clientes desde Supabase...</p>
          ) : (
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Teléfono</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td>{client.id}</td>
                    <td>{client.name}</td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ClientsPage;