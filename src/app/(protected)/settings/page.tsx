'use client'

import Link from 'next/link'
import { Zap, ArrowRight } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

// Demo: the user's current plan. In a real app this would come from the DB.
const CURRENT_PLAN = 'Free'

export default function Settings() {
  const { user, signOut } = useAuth()
  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Settings</h1>

      {/* Subscription plan */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
              <Zap size={20} className="text-gray-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Current plan</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-base font-semibold text-gray-900 dark:text-gray-100">{CURRENT_PLAN}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Active
                </span>
              </div>
            </div>
          </div>
          <Link
            href="/plans"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shrink-0"
          >
            Upgrade <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Account */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Signed in as</p>
          <p className="text-base font-medium text-gray-900 dark:text-gray-100 mt-1">{user?.email}</p>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
          <button onClick={signOut} className="px-5 py-2.5 rounded-xl text-sm font-medium border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors">
            Sign out
          </button>
        </div>
      </div>
    </div>
  )
}
