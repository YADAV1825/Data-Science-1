
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Github, Code, Terminal, BookOpen } from 'lucide-react';
import { ThemeMode } from '../types';
import { THEME_COLORS } from '../constants';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const colors = THEME_COLORS[theme];
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <nav 
      className="flex items-center justify-between px-4 h-10 border-b z-50 sticky top-0"
      style={{ 
        backgroundColor: colors.header, 
        borderColor: colors.border,
        color: colors.text
      }}
    >
      <div className="flex items-center space-x-4">
        <Link to="/" className="flex items-center space-x-2 font-semibold hover:opacity-80 transition-opacity">
          <Code size={18} className="text-[#007acc]" />
          <span className="text-sm tracking-tight font-mono">PyData_Academy</span>
        </Link>
        <div className="hidden md:flex items-center space-x-1 text-xs opacity-60">
          <span>src</span>
          <span>&gt;</span>
          <span className="flex items-center gap-1">
            {isHome ? <BookOpen size={12} /> : <Terminal size={12} />}
            {isHome ? 'dashboard' : 'lesson.py'}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button 
          onClick={onToggleTheme}
          className="p-1.5 rounded-md hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-1.5 rounded-md hover:bg-opacity-10 hover:bg-gray-500 transition-colors"
        >
          <Github size={18} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
