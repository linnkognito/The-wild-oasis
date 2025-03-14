import supabase from './supabase';

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  // Get the current session from Supabase (checks auth state)
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // Refetch latest user data from supabase
  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  // Data object has "session" and "user"
  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
