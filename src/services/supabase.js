import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://pzxpotxqhvlrhokeggnu.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eHBvdHhxaHZscmhva2VnZ251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2OTk4NDQsImV4cCI6MjA1NDI3NTg0NH0.bH6hqz0Gxlisd_dTPlfUvPsmKUc0LJbP-3S2Y3hpNXc';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
