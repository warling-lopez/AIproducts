// supabase.js
import { createClient } from "@supabase/supabase-js";

// ⚡ Reemplaza estos valores con los de tu proyecto en Supabase
const SUPABASE_URL = process.env.NEXT_SUPABASE_PUBLIC_URL; // Asegúrate de que esta variable de entorno esté configurada
const SUPABASE_ANON_KEY = process.env.NEXT_SUPABASE_ANON_API_KEY;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
