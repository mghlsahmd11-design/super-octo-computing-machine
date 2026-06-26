import { motion } from 'motion/react';
import { Target, Zap, Shield, HeadphonesIcon, Layers, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'استراتيجيات دقيقة',
    description: 'نضع خططاً مدروسة تتوافق مع أهداف أعمالك لضمان تحقيق أقصى عائد على الاستثمار في وقت قياسي.'
  },
  {
    icon: Zap,
    title: 'سرعة وكفاءة',
    description: 'تطبيق أحدث التقنيات وأفضل الممارسات لضمان تنفيذ مشاريعك بسرعة عالية دون المساس بالجودة.'
  },
  {
    icon: Shield,
    title: 'مستوى أمان عالي',
    description: 'نولي أمان بياناتك الأولوية القصوى من خلال توفير حلول أمنية متقدمة وحماية ضد الثغرات.'
  },
  {
    icon: HeadphonesIcon,
    title: 'دعم فني متواصل',
    description: 'فريق متخصص متاح على مدار الساعة للرد على استفساراتك وحل أي مشكلة قد تواجهك فوراً.'
  },
  {
    icon: Layers,
    title: 'حلول متكاملة',
    description: 'نوفر باقة شاملة من الخدمات التقنية والإدارية لتغطية كافة احتياجات مشروعك تحت سقف واحد.'
  },
  {
    icon: BarChart3,
    title: 'تحليلات وتقارير',
    description: 'نقدم لك تقارير دورية وتحليلات شاملة لأداء أنظمتك لتتمكن من اتخاذ قرارات مبنية على بيانات دقيقة.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold mb-2">لماذا تختارنا؟</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">مميزات تصنع الفارق</h3>
            <p className="text-slate-600 text-lg">
              نحرص على تقديم أفضل وأرقى مستويات الخدمة لعملائنا لضمان تميزهم في سوق العمل التنافسي.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-900/5 transition-all group"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-600 transition-all duration-300">
                <feature.icon className="text-amber-600 group-hover:text-white transition-colors" size={28} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
