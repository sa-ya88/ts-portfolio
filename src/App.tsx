import { useState } from "react";
import { FaGithub } from 'react-icons/fa';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  emoji: string;
  url: string;
  githubUrl?: string;
  imageUrl?: string;
}

export default function App() {
  const portfolioItems: PortfolioItem[] = [
    { 
      id: 1, 
      title: "ポートフォリオサイト", 
      description: "当サイト。ユーザビリティを重視したシンプルなWebサイト", 
      tags: ["React", "TypeScript"], 
      color: "from-rose-100 to-pink-100", 
      emoji: "準備中…", 
      url: "https://tachibana-lab.com/",
      githubUrl: "https://github.com/sa-ya88/ts-portfolio/",
      imageUrl: "/images/1.webp"
    },
    { 
      id: 2, 
      title: "飲食店公式サイト", 
      description: "シンプルなコーポレートサイト。担当者が更新することを想定し、WordPressを活用。", 
      tags: ["WordPress", "Lightning", "PHP", "MySQL"], 
      color: "from-rose-100 to-pink-100", 
      emoji: "準備中…", 
      url: "https://akaneya.tachibana-lab.com/",
      githubUrl: "https://github.com/sa-ya88/kuturogi/",
      imageUrl: "/images/2.webp"
    },
    { 
      id: 3, 
      title: "ホテル公式サイト", 
      description: "定番機能を搭載したコーポレートサイト。予約・決済・会員登録機能あり。", 
      tags: ["Laravel", "React", "TypeScript", "MySQL"], 
      color: "from-rose-100 to-pink-100", 
      emoji: "準備中…", 
      url: "https://kuturogi.tachibana-lab.com/",
      githubUrl: "https://github.com/sa-ya88/ts-portfolio/",
      imageUrl: "/images/3.webp"
    },
  ];

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="flex h-screen bg-[#FAF9F6] text-gray-700 overflow-hidden font-sans">
      {/* サイドバー (詳細表示) */}
      <aside className="w-1/3 bg-white border-r border-gray-100 flex flex-col shadow-sm">
        <div className="pt-10 px-10 border-b border-gray-50">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800"><a href="/">TACHIBANA PORTFOLIO</a></h1>
          <div className="mt-2 flex flex-col gap-1">
            <p className="text-gray-500 text-sm font-bold tracking-wider">BackEnd Engineer</p>
            <div className="flex items-center text-gray-400 text-xs">
              <span className="mr-1.5">✉️</span>
              <a href="mailto:s.tachibana088@gmail.com" className="hover:text-gray-600 transition-colors">
                s.tachibana088@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 flex flex-col justify-start">
          {selectedItem ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className={`relative overflow-hidden aspect-video bg-gradient-to-br ${selectedItem.color} rounded-[2rem] flex items-center justify-center shadow-inner border border-gray-50`}>
                {selectedItem.imageUrl ? (
                  <img src={selectedItem.imageUrl} alt={selectedItem.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-8xl drop-shadow-sm">{selectedItem.emoji}</span>
                )}
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 tracking-wider">{selectedItem.title}</h2>
                <p className="text-gray-500 leading-relaxed tracking-wide">{selectedItem.description}</p>
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span key={tag} className="bg-orange-50/80 text-orange-800/60 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border border-orange-100 shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  {/* サイトボタン */}
                  <a href={selectedItem.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-4 px-6 bg-gray-800 text-white rounded-2xl font-bold tracking-widest hover:bg-gray-700 transition-all shadow-lg active:scale-95 group">
                    VIEW SITE <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>

                  {/* GitHub用のボタン */}
                  <a href={selectedItem.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-4 px-6 bg-white text-gray-800 border-2 border-gray-800 rounded-2xl font-bold tracking-widest hover:bg-gray-50 transition-all shadow-sm active:scale-95 group">
                    <span className="mr-2">SOURCE CODE</span>
                    <span className="group-hover:rotate-12 transition-transform"><FaGithub className="mr-2 text-xl" /></span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            /* ↓ 未選択時に表示するプロフィール・環境情報 ↓ */
            <div className="space-y-8 animate-in fade-in duration-700">
              <div className="space-y-6">

                <div className="p-6 bg-orange-50/50 rounded-[2rem] border border-orange-100/50 text-center">
                  <p className="text-orange-800/50 text-sm font-medium">右側のグリッドから<br/>プロジェクトを選択してください</p>
                </div>

                <div className="space-y-4 pt-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">経験技術</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">OS / Env</p>
                      <p className="text-sm font-bold text-gray-700">Docker（WSL2）/ VMware ESXI</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">Editor</p>
                      <p className="text-sm font-bold text-gray-700">VS Code / Ecripse / A5SQL</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">Language</p>
                      <p className="text-sm font-bold text-gray-700">TS / PHP / VBA /Java / SQL</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">FW</p>
                      <p className="text-sm font-bold text-gray-700">Laravel / SpringBoot</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">DB</p>
                      <p className="text-sm font-bold text-gray-700">PostgreSQL / MySQL / SQLServer / Dr.Sum / Access</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">Infra</p>
                      <p className="text-sm font-bold text-gray-700">Github / ロリポップ！ / XServer / WADAX</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">Tool</p>
                      <p className="text-sm font-bold text-gray-700">WinSCP / WinMarge / GitBash / ChatGPT / Gemini</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-[10px] font-bold text-gray-400 mb-1 uppercase">ChatTool</p>
                      <p className="text-sm font-bold text-gray-700">Backlog / Redmine / Chatwork /Slack / Office365</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 資格 */}
              <div className="mt-8 p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <h3 className="text-xs font-bold text-gray-500 mb-2 flex items-center uppercase tracking-wider">
                  資格
                </h3>
                <div className="space-y-1">
                  <p className="text-[11px] leading-relaxed text-gray-400">・基本情報技術者試験</p>
                  <p className="text-[11px] leading-relaxed text-gray-400">・Oracle Certified Java Programmer Gold SE 11</p>
                  <p className="text-[11px] leading-relaxed text-gray-400">・ORACLE MASTER Silver DBA 2019</p>
                </div>
              </div>

              {/* 留意事項 */}
              <div className="mt-8 p-4 rounded-xl border border-gray-200 bg-gray-50/50">
                <h3 className="text-xs font-bold text-gray-500 mb-1 flex items-center">
                  <span className="mr-1">⚠️</span> 留意事項
                </h3>
                <p className="text-xs leading-relaxed text-gray-400">
                  各プロジェクト内の情報・画像・動画はすべてポートフォリオ用に作成した架空のものです。
                </p>
              </div>
            
            </div>
          )}
        </div>

      </aside>

      {/* プロジェクト一覧*/}
      <main className="flex-1 overflow-y-auto p-10 bg-[#FAF9F6]">
        <div className="grid grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`relative overflow-hidden aspect-square rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-pointer border-4 ${
                selectedItem?.id === item.id ? "border-white shadow-lg" : "border-transparent shadow-sm"
              }`}
            >
              {item.imageUrl ? (
                <div className="absolute inset-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
              )}

              <div className="relative z-10 flex flex-col items-center gap-2">
                {!item.imageUrl && <span className="text-6xl mb-2">{item.emoji}</span>}
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
