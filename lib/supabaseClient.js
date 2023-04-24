import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://qnmfwtzklyzyksmlincw.supabase.co', process.env.SUPABASE_API_KEY)