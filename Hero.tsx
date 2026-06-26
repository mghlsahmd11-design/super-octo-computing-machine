import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900/90 to-slate-800/80 absolute z-10" />
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" 
          alt="Office Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 font-medium text-sm mb-6 border border-amber-500/30">
              الخيار الأول للشركات الرائدة
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              ارتقِ بأعمالك نحو <span className="text-amber-500">القمة</span> مع حلولنا الرقمية
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              نقدم لك خدمات متكاملة بمعايير عالمية لتطوير وتنمية أعمالك. من التخطيط الاستراتيجي إلى التنفيذ التقني، نحن شريكك في النجاح.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="inline-flex justify-center items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-600/30 group">
                اطلب خدماتنا
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors backdrop-blur-sm">
                تواصل واتساب
                <MessageCircle size={20} className="text-green-400" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000" 
                alt="فريق العمل" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl w-full">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center font-bold text-xl">
                      +10
                    </div>
                    <div>
                      <div className="font-bold text-lg">سنوات من الخبرة</div>
                      <div className="text-slate-300 text-sm">في تقديم الحلول المبتكرة</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
