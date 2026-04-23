import { useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  emoji: string;
  url: string;
  imageUrl?: string; // 手動で保存した画像のパスを入れる
}

export default function App() {
  const portfolioItems: PortfolioItem[] = [
    { 
      id: 1, 
      title: "ポートフォリオサイト", 
      description: "ユーザビリティを重視したシンプルなWebサイト", 
      tags: ["React", "TypeScript"], 
      color: "from-rose-100 to-pink-100", 
      emoji: "🎨", 
      url: "https://tachibana-lab.com/",
      imageUrl: "/images/1.png"
    },
    { 
      id: 2, 
      title: "飲食店公式サイト", 
      description: "和をテーマにしたコーポレートサイト。担当者が更新することを想定し、WordPressを活用", 
      tags: ["WordPress", "Lightning", "PHP"], 
      color: "from-rose-100 to-pink-100", 
      emoji: "🎨", 
      url: "https://akaneya.tachibana-lab.com/",
      imageUrl: "/images/2.png"
    },
    { 
      id: 3, 
      title: "自社予約機能付き ホテル公式サイト", 
      description: "定番機能を搭載したコーポレートサイト。予約・決済・会員登録機能あり。", 
      tags: ["Laravel", "React", "TypeScript"], 
      color: "from-rose-100 to-pink-100", 
      emoji: "🎨", 
      url: "https://kuturogi.tachibana-lab.com/",
      imageUrl: "/images/3.png"
    },
  ];

  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <div className="flex h-screen bg-[#FAF9F6] text-gray-700 overflow-hidden font-sans">
      {/* サイドバー (詳細表示) */}
      <aside className="w-1/3 bg-white border-r border-gray-100 flex flex-col shadow-sm">
        <div className="p-10 border-b border-gray-50">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">TACHIBANA PORTFOLIO</h1>
          <p className="text-gray-400 text-sm mt-1">BackEnd Engineer / s.tachibana088@gmail.com</p>
        </div>

        <div className="flex-1 overflow-y-auto p-10 flex flex-col justify-start">
          {selectedItem ? (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* 詳細画面のメイン画像 */}
              <div className={`relative overflow-hidden aspect-video bg-gradient-to-br ${selectedItem.color} rounded-[2rem] flex items-center justify-center shadow-inner border border-gray-50`}>
                {selectedItem.imageUrl ? (
                  <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
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

                <div className="pt-6">
                  <a 
                    href={selectedItem.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-4 px-6 bg-gray-800 text-white rounded-2xl font-bold tracking-widest hover:bg-gray-700 transition-all shadow-lg active:scale-95 group"
                  >
                    VIEW SITE
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <div className="text-6xl mb-4 text-gray-200">←</div>
              <p className="text-gray-400">プロジェクトを選択してください</p>
            </div>
          )}
        </div>
      </aside>

      {/* メイングリッド (一覧表示) */}
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
              {/* 背景画像または背景色 */}
              {item.imageUrl ? (
                <div className="absolute inset-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* 文字を見やすくするためのオーバーレイ */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
              )}

              {/* アイコンとタイトル（画像の上に乗せる） */}
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
