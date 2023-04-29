import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://qnmfwtzklyzyksmlincw.supabase.co', String(process.env.SUPABASE_API_KEY))

export default supabase
