import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

// Fallback values prevent a crash during Next.js static prerendering at build
// time when NEXT_PUBLIC_* vars aren't injected yet. At runtime the real values
// must be present — the app will not function without them.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder-anon-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)
