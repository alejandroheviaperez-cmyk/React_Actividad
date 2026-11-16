import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IonContent, IonPage } from '@ionic/react';
import Navbar from '../components/Navbar';
import { createClient } from '../services/ClienteService';

const NewClientPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;

    try {
      await createClient({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      navigate('/clients');
    } catch (error) {
      alert('Error al guardar el cliente');
    }
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent className="ion-padding">
        <div className="container mt-4" style={{ maxWidth: '600px' }}>
          <h2 className="mb-4">Añadir Nuevo Cliente</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Carlos"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="carlos@test.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Teléfono</label>
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="600333333"
                required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Guardar Cliente
            </button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewClientPage;