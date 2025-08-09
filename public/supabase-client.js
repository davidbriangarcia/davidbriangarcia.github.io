import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://tugzzpqeuuwcipkcprsm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1Z3p6cHFldXV3Y2lwa2NwcnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc1MjY0MTEsImV4cCI6MjA2MzEwMjQxMX0.jjjLGa-1q5iZ282YF6es_CsaS0eu7e6uIwyLjLw0LsU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Returns the Supabase client instance.
 * This function is async to maintain compatibility with existing code
 * that uses `await getSupabaseClient()`.
 */
async function getSupabaseClient() {
    return supabase;
}

export { getSupabaseClient };