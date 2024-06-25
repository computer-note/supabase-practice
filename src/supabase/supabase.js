import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = import.meta.env.VITE_PROJECT_URL;
const ANON_KEY = import.meta.env.VITE_ANON_KEY;
const supabase = createClient(PROJECT_URL, ANON_KEY);

async function getWoods() {
  const response = await supabase.from('woods').select();

  return response;
}

const dbApi = { getWoods };

export default dbApi;
