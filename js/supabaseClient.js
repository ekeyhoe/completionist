import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://cablahdwsukzrqdjoniy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhYmxhaGR3c3VrenJxZGpvbml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0ODg3NjYsImV4cCI6MjA4NzA2NDc2Nn0.DJtwKfjVzjflQ1MI_PinDgA0Xo8fvHUzPYnKea_PKZQ"; // keep this as anon public key

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
