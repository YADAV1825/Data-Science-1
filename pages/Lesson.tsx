
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Columns, Rows, ExternalLink, Info, 
  Terminal, MonitorPlay, X, Code2
} from 'lucide-react';
import { COURSES, THEME_COLORS } from '../constants';
import { ThemeMode, LayoutMode } from '../types';

const Lesson: React.FC<{ theme: ThemeMode }> = ({ theme }) => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [layout, setLayout] = useState<LayoutMode>('side-by-side');
  const [showMeta, setShowMeta] = useState(false);

  const course = COURSES.find(c => c.id === courseId);
  
  if (!course) return (
    <div className="h-full flex flex-col items-center justify-center font-mono opacity-50">
      <Code2 size={48} className="mb-4 animate-pulse" />
      <p>Course Not Found</p>
      <button onClick={() => navigate('/')} className="mt-4 text-[#58a6ff] hover:underline">Return to Terminal</button>
    </div>
  );

  return (
    <div className={`h-full flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0d1117]' : 'bg-[#ffffff]'}`}>
      {/* Editor Tab Bar / Lesson Actions */}
      <div className={`h-10 flex items-center justify-between px-4 border-b transition-colors duration-300 ${theme === 'dark' ? 'border-[#30363d] bg-[#010409]' : 'border-[#e1e1e1] bg-[#f3f3f3]'}`}>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/')}
            className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-all group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <div className="flex items-center space-x-2 text-xs font-mono opacity-80">
            <span className="opacity-40">modules /</span>
            <span className={theme === 'dark' ? 'text-[#58a6ff]' : 'text-blue-600'}>{courseId}.py</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setShowMeta(!showMeta)}
            className={`flex items-center space-x-2 px-3 py-1 rounded text-[11px] font-bold transition-all ${showMeta ? 'bg-[#58a6ff22] text-[#58a6ff] border border-[#58a6ff44]' : 'hover:bg-white/10 opacity-60'}`}
          >
            <Info size={14} />
            <span className="hidden sm:inline uppercase tracking-tighter">Documentation</span>
          </button>
          <div className="h-4 w-[1px] bg-gray-500/30" />
          <div className={`flex p-0.5 rounded border transition-colors duration-300 ${theme === 'dark' ? 'bg-[#161b22] border-[#30363d]' : 'bg-[#e1e1e1] border-[#cccccc]'}`}>
            <button 
              onClick={() => setLayout('side-by-side')}
              className={`p-1.5 rounded transition-all ${layout === 'side-by-side' ? 'bg-[#58a6ff] text-white shadow-lg' : 'opacity-40 hover:opacity-100'}`}
              title="Split View"
            >
              <Columns size={14} />
            </button>
            <button 
              onClick={() => setLayout('stacked')}
              className={`p-1.5 rounded transition-all ${layout === 'stacked' ? 'bg-[#58a6ff] text-white shadow-lg' : 'opacity-40 hover:opacity-100'}`}
              title="Stacked View"
            >
              <Rows size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Split Interface */}
      {/* Changed overflow-hidden to overflow-y-auto when stacked to allow the scrolling requested */}
      <div className={`flex flex-1 p-2 gap-2 ${layout === 'stacked' ? 'flex-col overflow-y-auto' : 'flex-col lg:flex-row overflow-hidden'}`}>
        
        {/* VIDEO PANEL */}
        <div className={`relative flex flex-col transition-all duration-500 overflow-hidden rounded-xl border shadow-2xl shrink-0 ${theme === 'dark' ? 'bg-black border-[#30363d]' : 'bg-gray-100 border-[#e1e1e1]'} ${layout === 'stacked' ? 'h-[600px] w-full' : 'lg:w-[45%] h-full'}`}>
          <div className={`h-7 flex items-center px-4 justify-between border-b transition-colors duration-300 shrink-0 ${theme === 'dark' ? 'bg-[#161b22] border-[#30363d]' : 'bg-[#f8f8f8] border-[#e1e1e1]'}`}>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-40">
              <MonitorPlay size={12} />
              <span>Output Stream</span>
            </div>
            <div className="flex space-x-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
            </div>
          </div>
          
          <div className="flex-1 bg-black relative">
            {/* Using youtube-nocookie.com and additional parameters to fix embed restrictions (Error 153) */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${course.youtubeId}?autoplay=1&modestbranding=1&rel=0&enablejsapi=1&origin=${window.location.origin}`}
              title={course.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          
          <AnimatePresence>
            {showMeta && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className={`absolute inset-4 p-8 backdrop-blur-xl border rounded-2xl shadow-2xl z-20 flex flex-col ${theme === 'dark' ? 'bg-[#161b22]/90 border-[#58a6ff44]' : 'bg-white/90 border-blue-200'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`text-2xl font-black tracking-tighter ${theme === 'dark' ? 'text-[#58a6ff]' : 'text-blue-700'}`}>{course.title}</h3>
                    <div className="flex gap-4 mt-2">
                       <span className="text-[10px] font-mono opacity-50 px-2 py-0.5 border border-current rounded">{course.language}</span>
                       <span className="text-[10px] font-mono opacity-50 px-2 py-0.5 border border-current rounded">{course.duration}</span>
                    </div>
                  </div>
                  <button onClick={() => setShowMeta(false)} className="opacity-40 hover:opacity-100 p-2 hover:bg-black/5 rounded-full"><X size={24} /></button>
                </div>
                <div className="flex-1 overflow-y-auto">
                   <p className="text-sm opacity-80 leading-relaxed font-mono whitespace-pre-wrap">{course.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-500/20 text-[10px] font-mono opacity-40 italic">
                  // Documentation generated by PyData Kernel
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* IDE PANEL */}
        <div className={`relative flex flex-col transition-all duration-500 rounded-xl border shadow-2xl overflow-hidden shrink-0 ${theme === 'dark' ? 'bg-[#0d1117] border-[#30363d]' : 'bg-[#ffffff] border-[#e1e1e1]'} ${layout === 'stacked' ? 'h-[600px] w-full' : 'flex-1 h-full'}`}>
           <div className={`h-7 flex items-center px-4 justify-between border-b transition-colors duration-300 shrink-0 ${theme === 'dark' ? 'bg-[#161b22] border-[#30363d]' : 'bg-[#f8f8f8] border-[#e1e1e1]'}`}>
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold opacity-40">
              <Terminal size={12} />
              <span>Interactive_Kernel.ipynb</span>
            </div>
            <a 
              href="https://jupyter.org/try-jupyter/lab/" 
              target="_blank" 
              className="text-[10px] text-[#58a6ff] hover:underline flex items-center gap-1 font-mono group"
            >
              Open Workspace <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
          <div className="flex-1 relative group">
            <iframe
              src="https://jupyter.org/try-jupyter/lab/"
              className="absolute inset-0 w-full h-full border-none"
              title="Jupyter IDE"
              loading="lazy"
            />
            {/* Smooth Loading Indicator */}
            <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center bg-inherit z-[-1]">
              <div className="relative">
                <div className="absolute inset-0 animate-ping bg-[#58a6ff]/20 rounded-full" />
                <Code2 size={64} className="text-[#58a6ff] relative" />
              </div>
              <p className="mt-4 font-mono text-sm opacity-20 animate-pulse">Initializing Virtual Environment...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
