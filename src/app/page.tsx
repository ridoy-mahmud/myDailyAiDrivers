import Image from 'next/image';

export default function Home() {
  return (
    <section className="w-full max-w-3xl mx-auto bg-white/5 rounded-xl shadow-lg p-8 border border-white/10 flex flex-col">
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://img.icons8.com/?size=512&id=Nts60kQIvGqe&format=png" 
                alt="ChatGPT Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" 
                alt="Google Gemini Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/light/grok.png" 
                alt="Grok Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/dark/claude-color.png" 
                alt="Claude AI Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/deepseek-logo-icon.png" 
                alt="DeepSeek Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/light/vercel.png" 
                alt="Vercel Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
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
        {/* Kimi Card */}
        <div className="relative w-full bg-[#231942]/80 border border-purple-700/50 rounded-2xl shadow-2xl px-8 py-6 flex flex-row items-center justify-between gap-6 hover:shadow-fuchsia-700/30 transition-all duration-500 backdrop-blur-xl overflow-hidden group">
          {/* Liquid glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="flex items-center gap-4 flex-1 min-w-0 relative z-10">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg p-1">
              <Image 
                src="https://registry.npmmirror.com/@lobehub/icons-static-png/1.55.0/files/light/kimi.png" 
                alt="Kimi AI Logo" 
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-2xl font-bold text-purple-100 mb-1 truncate">Kimi AI</div>
              <div className="text-base text-purple-100/80 mb-0.5 text-left max-w-2xl truncate">Advanced AI assistant with exceptional reasoning capabilities and multilingual support. Excellent for research, analysis, and complex problem-solving tasks.</div>
            </div>
          </div>
          <a
            href="https://www.kimi.com/"
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