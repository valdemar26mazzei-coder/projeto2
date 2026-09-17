import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import React from 'react'
import { Video, Sparkles, Layers, Sliders, FileText } from 'lucide-react'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      <header className="border-b border-gray-800 bg-[#0E1424]/90 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30">
            TC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Tech Comparisons Hub
              </h1>
              <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20">
                Estúdio AI v3.0
              </span>
            </div>
            <p className="text-xs text-gray-400 hidden sm:block">Gerador de Vídeos, Reels & Prompts com Avatar Tech</p>
          </div>
        </div>

        <nav className="flex items-center gap-2 md:gap-4 text-sm font-medium">
          <a 
            href="#avatar-preview" 
            className="px-3 py-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/60 transition-all flex items-center gap-2 text-xs md:text-sm"
          >
            <Video className="w-4 h-4 text-cyan-400" />
            <span>Avatar & Cenário</span>
          </a>
          <a 
            href="#prompt-generator" 
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/20 hover:opacity-90 transition-all flex items-center gap-2 text-xs md:text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Gerador de Prompts</span>
          </a>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-gray-800/80 py-6 px-4 md:px-8 bg-[#080B13] text-center text-xs text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          Tech Comparisons Hub © {new Date().getFullYear()} — Automação de Vídeos para YouTube & Reels
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Estúdio Operacional</span>
        </div>
      </footer>
    </div>
  )
}
