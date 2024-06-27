import supabase from './supabase';

async function loginUser(email, password) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

const authApi = { loginUser };

export default authApi;
