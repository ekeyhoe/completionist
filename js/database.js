// js/database.js
import supabase from "./supabaseClient.js";

/**
 * Load all rows for a user from a given table
 * @param {string} tableName
 * @param {object} user
 * @returns {Array} data
 */
export async function loadUserTable(tableName, user) {
  const { data, error } = await supabase
    .from(tableName)
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    console.error(`Error loading ${tableName}:`, error);
    return [];
  }

  return data;
}

/**
 * Update a single field in a user's row
 * @param {string} tableName
 * @param {string} userId
 * @param {string} gameName
 * @param {string} field
 * @param {any} value
 */
export async function updateUserField(
  tableName,
  userId,
  gameName,
  field,
  value,
) {
  const { error } = await supabase
    .from(tableName)
    .update({ [field]: value })
    .eq("user_id", userId)
    .eq("game_name", gameName);

  if (error) console.error(`Error updating ${tableName}:`, error);
}

/**
 * Insert a new row for a user if it doesn’t exist
 * @param {string} tableName
 * @param {string} userId
 * @param {string} gameName
 */
export async function insertUserRow(tableName, userId, gameName) {
  const { data, error } = await supabase
    .from(tableName)
    .insert([
      { user_id: userId, game_name: gameName, completed: false, full: false },
    ])
    .select();

  if (error) console.error(`Error inserting row into ${tableName}:`, error);

  return data;
}
