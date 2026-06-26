import { motion } from 'motion/react';
import { MonitorSmartphone, Code2, LineChart, Megaphone } from 'lucide-react';

const services = [
  {
    icon: MonitorSmartphone,
    title: 'تطوير المواقع والتطبيقات',
    description: 'نبرمج ونصمم واجهات رقمية جذابة وسهلة الاستخدام تعكس هوية علامتك التجارية بدقة وتوفر تجربة مستخدم استثنائية.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Code2,
    title: 'الأنظمة البرمجية المخصصة',
    description: 'نبني أنظمة إدارة داخلية (ERP/CRM) مخصصة لتسهيل عملياتك اليومية وزيادة إنتاجية فريق عملك بكفاءة عالية.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Megaphone,
    title: 'التسويق الرقمي الشامل',
    description: 'ندير حملاتك الإعلانية ونتصدر محركات البحث لنجلب لك العملاء المهتمين ونرفع من مبيعاتك بشكل ملحوظ.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: LineChart,
    title: 'الاستشارات التقنية',
    description: 'نقدم استشارات متخصصة لمساعدتك في اتخاذ القرارات التقنية الصائبة ورسم خارطة الطريق للتحول الرقمي.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-amber-600 font-bold mb-2">خدماتنا</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">حلول متكاملة لنجاحك</h3>
            <p className="text-slate-600 text-lg">
              نضع بين يديك خلاصة خبراتنا لنقدم لك خدمات تقنية متقدمة تساهم في نمو وازدهار أعمالك.
            </p>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-3 border border-slate-300 rounded-full font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            تصفح كل الخدمات
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-48 sm:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                   <service.icon className="text-amber-600" size={24} />
                </div>
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#contact" className="text-amber-600 font-bold hover:text-amber-700 inline-flex items-center gap-2 group/link">
                  طلب الخدمة
                  <span className="group-hover/link:-translate-x-1 transition-transform">←</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
