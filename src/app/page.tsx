export default function Home() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-white/5 rounded-xl shadow-lg p-8 mt-8 border border-white/10 flex flex-col">
      <h2 className="text-3xl font-semibold mb-4 text-cyan-300">Your Daily AI Tools</h2>
      <p className="text-lg text-white/80 mb-6">Easily access and organize the AI tools you use every day.</p>
      <div className="flex flex-col gap-6 items-center justify-start w-full flex-1 pb-4">
        {/* ChatGPT Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">ChatGPT</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">OpenAI&apos;s conversational AI for creative writing, coding, and more. Great for brainstorming, Q&A, and productivity tasks.</div>
            </div>
          </div>
          <a
            href="https://chatgpt.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white font-bold shadow-xl hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Launch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
        {/* Gemini Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0L14.39 9.36L24 12L14.39 14.64L12 24L9.61 14.64L0 12L9.61 9.36L12 0Z"/>
                <path d="M6 6L7.5 10.5L12 12L7.5 13.5L6 18L4.5 13.5L0 12L4.5 10.5L6 6Z" opacity="0.6"/>
                <path d="M18 6L19.5 10.5L24 12L19.5 13.5L18 18L16.5 13.5L12 12L16.5 10.5L18 6Z" opacity="0.6"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">Gemini</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">Google&apos;s Gemini AI for advanced search, summarization, and productivity. Integrates with Google services for seamless workflow.</div>
            </div>
          </div>
          <a
            href="https://gemini.google.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white font-bold shadow-xl hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Launch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
        {/* Grok Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-gray-600">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">Grok</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">Grok by xAI offers real-time, witty, and insightful answers, designed for up-to-date information and a unique conversational experience.</div>
            </div>
          </div>
          <a
            href="https://x.com/i/grok"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white font-bold shadow-xl hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Launch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
        {/* Claude Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM12 4C7.582 4 4 7.582 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.582 16.418 4 12 4ZM12 6C15.314 6 18 8.686 18 12C18 15.314 15.314 18 12 18C8.686 18 6 15.314 6 12C6 8.686 8.686 6 12 6ZM12 8C9.791 8 8 9.791 8 12C8 14.209 9.791 16 12 16C14.209 16 16 14.209 16 12C16 9.791 14.209 8 12 8Z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">Claude</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">Anthropic&apos;s Claude AI assistant for helpful, harmless, and honest conversations. Excellent for analysis, writing, and complex reasoning tasks.</div>
            </div>
          </div>
          <a
            href="https://claude.ai/new"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white font-bold shadow-xl hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Launch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
        {/* DeepSeek Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z"/>
                <path d="M12 7L17 10V14L12 17L7 14V10L12 7Z" opacity="0.7"/>
                <circle cx="12" cy="12" r="2"/>
                <path d="M12 5L19 9V15L12 19L5 15V9L12 5Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">DeepSeek</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">Advanced AI model specializing in code generation, mathematics, and deep reasoning. Perfect for technical problem-solving and programming tasks.</div>
            </div>
          </div>
          <a
            href="https://chat.deepseek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white font-bold shadow-xl hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Launch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
        {/* Vercel v0 Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-black to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg border border-white/20">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 22h20L12 2z"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">Vercel v0</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">AI-powered UI generator by Vercel. Creates React components and interfaces from text prompts. Perfect for rapid prototyping and design.</div>
            </div>
          </div>
          <a
            href="https://v0.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-800 via-purple-900 to-indigo-900 text-white font-bold shadow-xl hover:shadow-purple-500/30 transition-all duration-300 whitespace-nowrap overflow-hidden z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Launch
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
} 