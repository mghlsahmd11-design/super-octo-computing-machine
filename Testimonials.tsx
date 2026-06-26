import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronRight, ChevronLeft } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد سعيد',
    role: 'المدير التنفيذي، شركة الأفق التقنية',
    content: 'تجربة رائعة بكل المقاييس، فريق محترف واستجابة سريعة. لقد نقلوا منصتنا إلى مستوى آخر تماماً وفاقوا كل توقعاتنا.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'سارة محمد',
    role: 'مؤسس ستارت أب، تطبيق نمو',
    content: 'لم يكن مجرد تصميم تطبيق، بل دراسة كاملة لفكرة المشروع وتطويرها. الدعم الفني لديهم ممتاز ومتاح دائماً للمساعدة.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'عمر خالد',
    role: 'مدير التسويق، مجموعة الرواد',
    content: 'النتائج التي حققناها معهم في غضون 3 أشهر فاقت ما حققناه في سنة كاملة. الكفاءة والسرعة في التنفيذ هي ما يميزهم.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((current) => (current + 1) % testimonials.length);
  const prev = () => setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold mb-2">آراء العملاء</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ماذا يقولون عنا؟</h3>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-slate-100 relative">
              <Quote className="absolute top-8 right-8 text-amber-100 rotate-180" size={80} />
              
              <div className="relative z-10 min-h-[250px] flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 italic">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-amber-500"
                      />
                      <div>
                        <h5 className="text-lg font-bold text-slate-900">{testimonials[currentIndex].name}</h5>
                        <p className="text-amber-600 text-sm font-medium">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-white p-2 rounded-full shadow-lg border border-slate-100">
                <button 
                  onClick={prev}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 text-slate-600 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
                <button 
                  onClick={next}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-50 text-slate-600 hover:bg-amber-600 hover:text-white transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
