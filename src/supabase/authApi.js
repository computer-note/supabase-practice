import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_ANON_KEY
);

async function loginUser(email, password) {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
}

const authApi = { loginUser };
export default authApi;
