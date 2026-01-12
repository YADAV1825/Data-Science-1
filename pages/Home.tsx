import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { COURSES } from '../constants';
import { ThemeMode } from '../types';

interface HomeProps {
  theme: ThemeMode;
}

const Home: React.FC<HomeProps> = ({ theme }) => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-8 md:p-12 lg:p-20 max-w-7xl mx-auto space-y-12"
    >
      {/* Courses Grid */}
      <section className="space-y-12 pb-32">
        <div className="flex items-end justify-between border-b border-[#30363d] pb-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Select Your Module</h2>
            <p className="text-sm opacity-50 font-mono italic">// Click any file to open editor</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {COURSES.map((course, idx) => (
             <motion.div
               key={course.id}
               variants={itemVariants}
               whileHover={{ y: -8 }}
               onClick={() => navigate(`/lesson/${course.id}`)}
               className="group relative cursor-pointer"
             >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#58a6ff55] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-[#161b22] border border-[#30363d] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={course.thumbnail}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      alt={course.title}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all" />
                    <div className="absolute top-2 right-2 px-2 py-0.5 bg-black/70 rounded text-[9px] font-bold text-[#58a6ff] border border-[#58a6ff55]">
                      {course.language}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-[10px] font-mono opacity-50 mb-1 uppercase tracking-tighter">Lesson {idx + 1}</div>
                    <h3 className="text-lg font-bold group-hover:text-[#58a6ff] transition-colors leading-tight mb-3">
                      {course.title}
                    </h3>
                    <p className="text-xs opacity-50 line-clamp-2 mb-6 font-mono leading-relaxed">
                      {course.description}
                    </p>
                    <div className="mt-auto pt-4 border-t border-[#30363d] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Play size={14} className="text-[#58a6ff]" />
                        <span className="text-[11px] font-mono opacity-60">{course.duration}</span>
                      </div>
                      <span className="text-[10px] font-bold text-[#58a6ff] group-hover:translate-x-1 transition-transform">EXECUTE &rarr;</span>
                    </div>
                  </div>
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
