import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Verificación de conexión requerida en consola
export const testSupabaseConnection = async () => {
  const { data, error } = await supabase.from('clients').select('*');
  if (error) {
    console.error('Error al conectar con Supabase:', error.message);
  } else {
    console.log('Conexión correcta con Supabase. Datos:', data);
  }
};