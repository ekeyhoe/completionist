import supabase from "./supabaseClient.js";

/**
 * Sign up a new user
 * @param {string} email
 * @param {string} password
 * @returns {object} { data, error }
 */
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) console.error("Sign up error:", error.message);
  else console.log("Signed up:", data);

  return { data, error };
}

/**
 * Sign in an existing user
 * @param {string} email
 * @param {string} password
 * @returns {object} { data, error }
 */
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) console.error("Sign in error:", error.message);
  else console.log("Logged in:", data);

  return { data, error };
}

/**
 * Sign out the current user
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error("Sign out error:", error.message);
  else console.log("User signed out");
}

/**
 * Get the currently logged in user
 * @returns {object|null} user
 */
export async function getCurrentUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Subscribe to auth state changes
 * @param {function} callback - called with (event, session)
 */
export function onAuthStateChange(callback) {
  supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
}
