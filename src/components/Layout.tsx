import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { CONTACT_EMAIL, GITHUB_PROFILE_URL } from "../data/site";

const navItems = [
  { to: "/", label: "ホーム", end: true },
  { to: "/about", label: "自己紹介" },
  { to: "/achievements", label: "実績" },
  { to: "/portfolio", label: "ポートフォリオ" },
  // { to: "/hire", label: "仕事の依頼" },
  { to: "/contact", label: "お問い合わせ" },
];

function linkClass(isActive: boolean) {
  return [
    "block rounded-full px-3.5 py-2 text-sm font-bold tracking-wide transition-all",
    isActive
      ? "bg-coral/12 text-coral-dark"
      : "text-ink/65 hover:bg-white/70 hover:text-ink",
  ].join(" ");
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <div className="page-bg flex min-h-dvh flex-col font-sans text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <NavLink to="/" end className="min-w-0">
            <p className="truncate text-lg font-bold tracking-tight sm:text-xl">
              <span className="text-coral">TACHIBANA</span> PORTFOLIO
            </p>
            <p className="text-[11px] font-bold tracking-wider text-ink/40">System Engineer</p>
          </NavLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="メインメニュー">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => linkClass(isActive)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-ink/15 bg-white px-4 py-2 text-sm font-bold text-ink lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "閉じる" : "メニュー"}
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-nav" className="border-t border-ink/10 bg-white/95 px-4 py-3 lg:hidden" aria-label="モバイルメニュー">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => linkClass(isActive)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <div className="flex min-h-0 flex-1 flex-col">
        <Outlet />
      </div>

      <footer className="border-t border-ink/10 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs font-bold text-ink/50 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            <span className="text-coral">TACHIBANA</span> PORTFOLIO
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-coral">
              {CONTACT_EMAIL}
            </a>
            <a href={GITHUB_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-coral">
              <FaGithub />
              GitHub
            </a>
            <NavLink to="/contact" className="hover:text-coral">
              お問い合わせ
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
}
