import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { Users, Briefcase, Award, Smile } from 'lucide-react';

function Counter({ value, suffix = "" }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest)) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums">0</span>;
}

const stats = [
  { icon: Users, value: 500, suffix: '+', label: 'عميل سعيد' },
  { icon: Briefcase, value: 1200, suffix: '+', label: 'مشروع منجز' },
  { icon: Award, value: 25, suffix: '', label: 'جائزة تميز' },
  { icon: Smile, value: 99, suffix: '%', label: 'نسبة الرضا' },
];

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-slate-900/80" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mb-6 mx-auto">
                <stat.icon size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-slate-300 font-medium text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
