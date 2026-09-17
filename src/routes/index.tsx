import { createFileRoute } from '@tanstack/react-router'
import React, { useState } from 'react'
import {
  Play,
  Sparkles,
  Copy,
  Check,
  Sliders,
  Tv,
  Smartphone,
  FilePdf,
  ExternalLink,
  Layers,
  Video,
  Bot,
  Zap,
  Palette,
  RefreshCw,
  Monitor,
  Mic
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: IndexPage,
})

function IndexPage() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'youtube' | 'reel'>('youtube')
  
  // Prompt Generator Dynamic States
  const [articleUrl, setArticleUrl] = useState('https://techcomparisonshub.com/artigos/smartphone-flagship-vs-intermediario')
  const [productA, setProductA] = useState('Samsung Galaxy S24 Ultra')
  const [productB, setProductB] = useState('iPhone 15 Pro Max')
  const [avatarStyle, setAvatarStyle] = useState('Apresentador Tech Moderno, vestindo blazer casual escuro')
  const [studioColor, setStudioColor] = useState('Ciano Neón #00f2fe e Azul Profundo com painéis LED sextavados')
  const [videoTone, setVideoTone] = useState('Dinâmico, informativo, focado em custo-benefício e testes práticos')
  const [aspectRatio, setAspectRatio] = useState('16:9 Landscape (YouTube Principal)')
  const [includeCallToAction, setIncludeCallToAction] = useState(true)

  // Master prompt construction
  const generatedPrompt = `[PROMPT DE CRIAÇÃO DE VÍDEO AI - TECH COMPARISONS HUB]

🎯 TÍTULO DO PROJETO: Vídeo 3 - Comparativo ${productA} vs ${productB}
🔗 FONTE DO ARTIGO / MATÉRIA: ${articleUrl}

👤 CONFIGURAÇÃO DO AVATAR APRESENTADOR:
- Estilo: ${avatarStyle}
- Aparência: Apresentador oficial baseado na foto do criador, postura confiante e expressiva.
- Interação: Apresentador fala diretamente para a câmera, gesticulando suavemente para os gráficos e produtos flutuantes ao lado.

🌆 AMBIENTE DO ESTÚDIO TECH (BRANDING):
- Iluminação e Cores: ${studioColor}
- Elementos de Fundo: Setup ultra-futurista de tecnologia, iluminação neon cyan/blue, estante com gadgets iluminados e telas transparentes OLED ao fundo exibindo logotipos e benchmarks.

🎬 TRANSIÇÕES E MESCLA DE IMAGENS:
- Alternar entre: Shot do Apresentador (40%) + B-Roll dos produtos ${productA} e ${productB} em close-up com iluminação de estúdio (40%) + Telas comparativas de especificações lado a lado (20%).

🎙️ TOM E RITMO DA VOZ:
- ${videoTone}

📐 FORMATO E ENQUADRAMENTO:
- Formato: ${aspectRatio}
${includeCallToAction ? '- ENCERRAMENTO (CTA): "Inscreva-se no Tech Comparisons Hub e acesse o link na descrição para ver a análise completa!"' : ''}`

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-10">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-indigo-950/40 border border-cyan-500/20 p-6 md:p-10 shadow-2xl">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            Novo Vídeo #3 em Produção
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Estúdio de Apresentador Avatar & Gerador de Vídeo Tech
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Aproveitando a base dos dois primeiros vídeos do canal, crie o terceiro vídeo integrado com avatar realista, cenário de estúdio tech customizado com as cores do site e gerador de comandos reutilizável.
          </p>
        </div>
      </section>

      {/* SEÇÃO 1: VISUALIZADOR DE VÍDEO & AVATAR DE APRESENTAÇÃO */}
      <section id="avatar-preview" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-800 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Video className="w-5 h-5 text-cyan-400" />
              Prévia da Apresentação do Vídeo 3 & Reels
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              Mescla do avatar apresentador com ambiente neon tech e imagens dos produtos em análise
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-gray-800 text-xs">
            <button
              onClick={() => { setActiveTab('youtube'); setAspectRatio('16:9 Landscape (YouTube Principal)'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'youtube' ? 'bg-cyan-500 text-slate-950 shadow-md font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              <Tv className="w-4 h-4" /> YouTube (16:9)
            </button>
            <button
              onClick={() => { setActiveTab('reel'); setAspectRatio('9:16 Vertical (Reels / Shorts)'); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${activeTab === 'reel' ? 'bg-cyan-500 text-slate-950 shadow-md font-semibold' : 'text-gray-400 hover:text-white'}`}
            >
              <Smartphone className="w-4 h-4" /> Reel / Short (9:16)
            </button>
          </div>
        </div>

        {/* CONTAINER DO PLAYER / PREVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-cyan-500/30 bg-slate-900/90 overflow-hidden relative shadow-2xl flex flex-col items-center justify-center min-h-[380px] md:min-h-[460px] p-6">
            
            {/* Cenário Tech Fundo simulado */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0B132B] to-cyan-950/60 opacity-90"></div>
            <div className="absolute inset-0 bg-[radial-gradient(#00f2fe_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
            
            {/* Iluminação Neon de Fundo */}
            <div className="absolute top-1/4 left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-blue-600/20 rounded-full blur-3xl"></div>

            {/* Conteúdo sobreposto na sala tech */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-between gap-6">
              
              {/* Top Bar da tela do estúdio */}
              <div className="w-full flex items-center justify-between border-b border-cyan-500/20 pb-3 text-xs text-cyan-300 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  GRAVANDO • ESTÚDIO TECH REEL / YOUTUBE
                </span>
                <span className="bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                  CORES SITE: #00F2FE / BRANDING OK
                </span>
              </div>

              {/* Centro: Avatar + Split Screen de Produtos */}
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center my-auto">
                
                {/* Cartão do Avatar */}
                <div className="relative rounded-xl border border-cyan-400/40 bg-slate-950/80 p-4 flex flex-col items-center text-center shadow-lg shadow-cyan-950/50 group hover:border-cyan-400 transition-all">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-cyan-400 shadow-xl relative mb-3 bg-slate-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/80 to-transparent z-10"></div>
                    <img 
                      src="/uploads/imagem_e_url_projeto.pdf" 
                      alt="Foto do Apresentador Avatar"
                      className="w-full h-full object-cover rounded-full hidden"
                      onError={(e) => {
                        // Fallback se PDF for documento
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tr from-slate-900 to-cyan-950 text-cyan-300 p-2 text-center">
                      <Bot className="w-10 h-10 text-cyan-400 mb-1 animate-pulse" />
                      <span className="text-[10px] font-bold tracking-wider uppercase">Avatar Apresentador</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">Apresentador Tech AI</span>
                  <span className="text-xs text-cyan-400 flex items-center gap-1 mt-0.5">
                    <Mic className="w-3 h-3" /> Voz Sincronizada com Artigo
                  </span>
                </div>

                {/* Tela de Comparação do Produto em Análise */}
                <div className="rounded-xl border border-blue-500/30 bg-slate-950/80 p-4 space-y-3 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-gray-400 border-b border-gray-800 pb-2">
                    <span className="font-semibold text-cyan-300 flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5" /> Tela de Teste de Benchmark
                    </span>
                    <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">Ao Vivo</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <p className="text-[10px] text-gray-400 truncate">{productA}</p>
                      <p className="text-lg font-extrabold text-cyan-400 mt-1">9.4 / 10</p>
                      <span className="text-[9px] text-gray-400">Desempenho</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <p className="text-[10px] text-gray-400 truncate">{productB}</p>
                      <p className="text-lg font-extrabold text-blue-400 mt-1">9.1 / 10</p>
                      <span className="text-[9px] text-gray-400">Desempenho</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-300 italic text-center pt-1">
                    "Mescla dinâmica entre apresentação humana e gráficos interativos em tempo real."
                  </p>
                </div>

              </div>

              {/* Footer do player */}
              <div className="w-full flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" /> 01:45 / 08:30 min
                </span>
                <span className="text-cyan-400 font-mono text-[11px]">Formato: {activeTab === 'youtube' ? '16:9 YouTube' : '9:16 Reel'}</span>
              </div>

            </div>
          </div>

          {/* PAINEL LATERAL: REFERÊNCIAS DO VÍDEO & ANEXO */}
          <div className="space-y-4 flex flex-col justify-between">
            <div className="rounded-2xl border border-gray-800 bg-slate-900/60 p-5 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-3">
                <Layers className="w-4 h-4 text-cyan-400" />
                Estrutura de Vídeos do Canal
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-950 border border-gray-800/80 text-xs flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-300">Vídeo 1 (YouTube)</p>
                    <p className="text-gray-500 text-[11px]">Comparativo Inicial de Smartphones</p>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded font-semibold">Publicado</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-gray-800/80 text-xs flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-300">Vídeo 2 (YouTube / Shorts)</p>
                    <p className="text-gray-500 text-[11px]">Top Gadgets Tech do Mês</p>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-1 rounded font-semibold">Publicado</span>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/40 text-xs flex items-center justify-between">
                  <div>
                    <p className="font-bold text-cyan-300">Vídeo 3 (Atual + Reel)</p>
                    <p className="text-cyan-400/80 text-[11px]">Avatar em Sala Tech + Análise Artigo</p>
                  </div>
                  <span className="bg-cyan-500 text-slate-950 text-[10px] px-2 py-1 rounded font-bold animate-pulse">Em Produção</span>
                </div>
              </div>
            </div>

            {/* REFERÊNCIA DE ARQUIVO PDF ANEXADO */}
            <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900 to-slate-950 p-5 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs">
                <FilePdf className="w-4 h-4" /> Documento Base Anexado
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Arquivo original com foto do apresentador e URLs do projeto:
              </p>
              <a 
                href="/uploads/imagem_e_url_projeto.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-between w-full p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/50 transition-all text-xs font-medium"
              >
                <span className="truncate">imagem_e_url_projeto.pdf</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: GERADOR DE PROMPT DE COMANDO PARA PRÓXIMOS VÍDEOS */}
      <section id="prompt-generator" className="space-y-6 pt-6 border-t border-gray-800">
        <div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Gerador de Prompt de Comando (IA Video Generator)</h3>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Ajuste os parâmetros abaixo para gerar o prompt exato para a criação dos próximos vídeos e Reels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* CAMPOS REQUISITADOS DE SOLICITAÇÃO E ALTERAÇÃO */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-gray-800 rounded-2xl p-6 space-y-5 shadow-xl">
            <div className="flex items-center gap-2 border-b border-gray-800 pb-3 text-cyan-400 font-bold text-sm">
              <Sliders className="w-4 h-4" /> Campos Editáveis para os Próximos Vídeos
            </div>

            {/* URL do Artigo / Matéria */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center justify-between">
                <span>URL do Site / Artigo Base</span>
                <span className="text-[10px] text-cyan-400">Fonte do Roteiro</span>
              </label>
              <input 
                type="url" 
                value={articleUrl} 
                onChange={(e) => setArticleUrl(e.target.value)}
                className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
                placeholder="https://techcomparisonshub.com/..."
              />
            </div>

            {/* Produtos em Análise */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">Produto A</label>
                <input 
                  type="text" 
                  value={productA} 
                  onChange={(e) => setProductA(e.target.value)}
                  className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300">Produto B</label>
                <input 
                  type="text" 
                  value={productB} 
                  onChange={(e) => setProductB(e.target.value)}
                  className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            {/* Estilo do Avatar */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1">
                <Bot className="w-3.5 h-3.5 text-cyan-400" /> Estilo & Traje do Avatar
              </label>
              <input 
                type="text" 
                value={avatarStyle} 
                onChange={(e) => setAvatarStyle(e.target.value)}
                className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Cenário & Cores do Site */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 flex items-center gap-1">
                <Palette className="w-3.5 h-3.5 text-cyan-400" /> Cores do Estúdio / Branding
              </label>
              <input 
                type="text" 
                value={studioColor} 
                onChange={(e) => setStudioColor(e.target.value)}
                className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Tom e Ritmo do Roteiro */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Tom do Vídeo / Apresentação</label>
              <input 
                type="text" 
                value={videoTone} 
                onChange={(e) => setVideoTone(e.target.value)}
                className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            {/* Formato */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300">Proporção da Câmera (Aspect Ratio)</label>
              <select 
                value={aspectRatio} 
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full bg-slate-950 border border-gray-800 rounded-xl px-3 py-2 text-xs text-gray-200 focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="16:9 Landscape (YouTube Principal)">16:9 Horizontal (YouTube)</option>
                <option value="9:16 Vertical (Reels / TikTok / Shorts)">9:16 Vertical (Reels / Shorts)</option>
                <option value="1:1 Square (Feed Instagram/LinkedIn)">1:1 Quadrado (Feed)</option>
              </select>
            </div>

            {/* Toggle CTA */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-xs">
              <span className="text-gray-300 font-medium">Incluir Chamada para Ação (CTA)</span>
              <input 
                type="checkbox" 
                checked={includeCallToAction} 
                onChange={(e) => setIncludeCallToAction(e.target.checked)}
                className="w-4 h-4 accent-cyan-500 rounded cursor-pointer"
              />
            </div>

          </div>

          {/* EXIBIÇÃO DO MASTER PROMPT GERADO */}
          <div className="lg:col-span-7 bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <h4 className="font-mono text-sm text-cyan-300 font-bold uppercase tracking-wider">
                    Prompt de Comando Final (Pronto para IA)
                  </h4>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs hover:opacity-90 transition-all shadow-md shadow-cyan-500/20"
                >
                  {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copiado!' : 'Copiar Prompt'}
                </button>
              </div>

              <div className="bg-slate-900/90 border border-gray-800 rounded-xl p-4 font-mono text-xs text-gray-300 whitespace-pre-wrap leading-relaxed max-h-[420px] overflow-y-auto selection:bg-cyan-500 selection:text-black">
                {generatedPrompt}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-500">
              <span>Compatível com: HeyGen, Sora, Midjourney v6, Runway Gen-2 & Synthesia</span>
              <span className="text-cyan-400 font-semibold">Tech Comparisons Hub Studio</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
