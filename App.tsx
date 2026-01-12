
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Files, Search, GitBranch, Play, Settings, User, 
  Terminal, Code2, BookOpen, Layers, Monitor, ChevronRight,
  Sun, Moon, Github, Coffee, X
} from 'lucide-react';
import Home from './pages/Home';
import Lesson from './pages/Lesson';
import { ThemeMode } from './types';

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activeTab, setActiveTab] = useState<string | null>('explorer');
  const location = useLocation();

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#0d1117';
      document.body.style.color = '#c9d1d9';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#333333';
    }
  }, [theme]);

  const isLessonPage = location.pathname.includes('/lesson/');
  
  // Toggle sidebar logic
  const handleTabClick = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`flex flex-col h-screen overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0d1117] text-[#c9d1d9]' : 'bg-[#ffffff] text-[#333333]'}`}>
      {/* Top Header / Title Bar */}
      <header className={`h-9 flex items-center justify-between px-3 border-b z-50 transition-colors duration-300 ${theme === 'dark' ? 'border-[#30363d] bg-[#010409]' : 'border-[#e1e1e1] bg-[#f3f3f3]'}`}>
        <div className="flex items-center space-x-3 text-xs opacity-80">
          <Code2 size={16} className="text-[#58a6ff]" />
          <div className="flex space-x-4">
            <span className="cursor-pointer hover:bg-white/10 px-1 rounded transition-colors">File</span>
            <span className="cursor-pointer hover:bg-white/10 px-1 rounded transition-colors">Edit</span>
            <span className="cursor-pointer hover:bg-white/10 px-1 rounded transition-colors">Selection</span>
            <span className="cursor-pointer hover:bg-white/10 px-1 rounded transition-colors">View</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className={`border px-10 py-0.5 rounded text-[11px] min-w-[300px] text-center opacity-60 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0d1117] border-[#30363d]' : 'bg-[#ffffff] border-[#e1e1e1]'}`}>
            PyData-Academy — roadmap.ipynb
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleTheme} 
            className={`p-1.5 rounded-md transition-all duration-300 hover:scale-110 ${theme === 'dark' ? 'text-yellow-400 hover:bg-white/10' : 'text-blue-600 hover:bg-black/5'}`}
            title="Toggle Light/Dark Mode"
          >
            {theme === 'dark' ? <Sun size={16} fill="currentColor" /> : <Moon size={16} fill="currentColor" />}
          </button>
          <div className="w-[1px] h-4 bg-gray-500/30 mx-1" />
          <Coffee size={14} className="opacity-60 cursor-pointer hover:text-[#58a6ff]" />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar (Side icons) - Hidden on Lesson Page to maximize space */}
        {!isLessonPage && (
          <aside className={`w-12 border-r flex flex-col items-center py-4 space-y-6 transition-colors duration-300 ${theme === 'dark' ? 'border-[#30363d] bg-[#0d1117]' : 'border-[#e1e1e1] bg-[#f3f3f3]'}`}>
            <div className="space-y-4 flex-1">
              <div 
                onClick={() => handleTabClick('explorer')}
                className={`p-2 cursor-pointer transition-all duration-200 ${activeTab === 'explorer' ? 'text-[#58a6ff] border-l-2 border-[#58a6ff]' : 'opacity-40 hover:opacity-100'}`}
              >
                <Files size={24} />
              </div>
              <Search className="opacity-20 cursor-not-allowed p-2" size={24} />
              <GitBranch className="opacity-20 cursor-not-allowed p-2" size={24} />
              <Play className="opacity-20 cursor-not-allowed p-2" size={24} />
            </div>
            <div className="space-y-4 pb-4">
              <User className="opacity-40 hover:text-[#58a6ff] cursor-pointer" size={24} />
              <Settings className="opacity-40 hover:text-[#58a6ff] cursor-pointer" size={24} />
            </div>
          </aside>
        )}

        {/* Sidebar / Explorer - Hidden on Lesson Page */}
        <AnimatePresence mode="wait">
          {!isLessonPage && activeTab === 'explorer' && (
            <motion.aside 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 260, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              className={`border-r hidden md:flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'border-[#30363d] bg-[#161b22]' : 'border-[#e1e1e1] bg-[#f8f8f8]'}`}
            >
              <div className="p-3 uppercase text-[11px] font-bold tracking-widest opacity-60 flex justify-between items-center">
                <span>Explorer</span>
                <button onClick={() => setActiveTab(null)} className="hover:bg-white/10 p-1 rounded">
                  <X size={14} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto font-mono text-xs">
                <div className="group">
                  <div className="flex items-center p-1 bg-white/5 cursor-pointer">
                    <ChevronRight size={14} className="rotate-90 mr-1" />
                    <span className="font-bold">PYDATA_ACADEMY</span>
                  </div>
                  <div className="pl-4 py-1">
                    <Link to="/" className={`flex items-center space-x-2 p-1 hover:bg-white/10 rounded cursor-pointer ${theme === 'dark' ? 'text-[#7ee787]' : 'text-green-700'}`}>
                      <Terminal size={12} />
                      <span>README.md</span>
                    </Link>
                    <div className="flex items-center space-x-2 p-1 opacity-50 cursor-pointer hover:bg-white/10 rounded">
                      <Code2 size={12} className="text-[#58a6ff]" />
                      <span>environment.yml</span>
                    </div>
                    <div className="mt-4 text-[10px] uppercase opacity-40 px-2 font-bold tracking-tighter border-b mb-2 pb-1">Course Files</div>
                    <div className="pl-1 space-y-0.5">
                       <Link to="/" className="flex items-center space-x-2 p-1 hover:bg-[#58a6ff11] rounded cursor-pointer group">
                        <BookOpen size={12} className="text-[#d2a8ff]" />
                        <span>roadmap.ipynb</span>
                      </Link>
                      <div className="flex items-center space-x-2 p-1 opacity-40 cursor-default">
                        <Files size={12} />
                        <span>projects/</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content Area / Editor */}
        <main className="flex-1 relative overflow-hidden flex flex-col">
          {/* Tabs Row - Only show on Home for VS Code feel */}
          {!isLessonPage && (
            <div className={`h-9 flex border-b transition-colors duration-300 ${theme === 'dark' ? 'border-[#30363d] bg-[#010409]' : 'border-[#e1e1e1] bg-[#f3f3f3]'}`}>
              <div className={`flex items-center px-4 space-x-2 border-r text-xs h-full min-w-[120px] transition-colors duration-300 ${theme === 'dark' ? 'border-[#30363d] bg-[#0d1117] border-t-2 border-t-[#58a6ff]' : 'border-[#e1e1e1] bg-white border-t-2 border-t-[#58a6ff]'}`}>
                <BookOpen size={12} className="text-[#d2a8ff]" />
                <span>roadmap.ipynb</span>
                <span className="ml-auto opacity-40 hover:bg-white/20 rounded p-0.5">×</span>
              </div>
            </div>
          )}
          
          <div className="flex-1 relative overflow-auto">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/lesson/:courseId" element={<Lesson theme={theme} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>

      {/* Status Bar */}
      <footer className={`h-6 flex items-center justify-between px-3 text-[11px] font-medium z-50 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#007acc] text-white' : 'bg-[#005fb8] text-white'}`}>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 cursor-pointer hover:bg-white/20 px-1 rounded">
            <GitBranch size={12} />
            <span>main*</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>0 Errors</span>
            <span>0 Warnings</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="opacity-80">Spaces: 4</span>
          <span className="opacity-80">UTF-8</span>
          <div className="flex items-center space-x-1">
            <Code2 size={12} />
            <span>Python 3.11.2</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
