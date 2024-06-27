import supabase from './supabase';

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

const woodDbApi = { getWoods, addWood, deleteWood, updateWood };

export default woodDbApi;
