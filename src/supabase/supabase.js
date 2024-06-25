import { createClient } from '@supabase/supabase-js';

const PROJECT_URL = import.meta.env.VITE_PROJECT_URL;
const ANON_KEY = import.meta.env.VITE_ANON_KEY;
const supabase = createClient(PROJECT_URL, ANON_KEY);

const TABLE_NAME = 'woods';

async function getWoods() {
  const response = await supabase.from(TABLE_NAME).select();

  return response;
}

async function addWood(wood) {
  const response = await supabase
    .from(TABLE_NAME)
    .insert(wood)
    .select();

  return response;
}

async function deleteWood(woodId) {
  const response = await supabase
    .from(TABLE_NAME)
    .delete()
    .eq('id', woodId)
    .select();

  return response;
}

async function updateWood(updatedWood) {
  const response = await supabase
    .from(TABLE_NAME)
    .update(updatedWood)
    .eq('id', updatedWood.id)
    .select();

  return response;
}

const dbApi = { getWoods, addWood, deleteWood, updateWood };

export default dbApi;
