import { supabase } from '../config/supabase';
import { Client } from '../interfaces/Client';

export const getClients = async (): Promise<Client[]> => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error al obtener clientes:', error.message);
    throw error;
  }

  return data || [];
};

export const createClient = async (client: Omit<Client, 'id'>): Promise<Client | null> => {
  const { data, error } = await supabase
    .from('clients')
    .insert([client])
    .select()
    .single();

  if (error) {
    console.error('Error al crear cliente:', error.message);
    throw error;
  }

  return data;
};