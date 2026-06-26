import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'كم يستغرق بناء موقع إلكتروني أو تطبيق؟',
    answer: 'تعتمد المدة على حجم وتعقيد المشروع. المواقع التعريفية البسيطة قد تستغرق أسبوعين إلى شهر، بينما التطبيقات المعقدة قد تحتاج من شهرين إلى عدة أشهر. نقدم لك جدولاً زمنياً دقيقاً بعد مناقشة متطلباتك.'
  },
  {
    question: 'هل تقدمون خدمات ما بعد التسليم؟',
    answer: 'نعم، نوفر باقات دعم فني وصيانة مستمرة لضمان عمل أنظمتك بكفاءة عالية، بالإضافة إلى تحديثات أمنية وإضافة ميزات جديدة حسب الحاجة.'
  },
  {
    question: 'ما هي التقنيات التي تستخدمونها؟',
    answer: 'نعتمد على أحدث التقنيات القابلة للتوسع مثل React, Node.js, Flutter، مع استخدام حلول سحابية متقدمة من AWS أو Google Cloud لضمان الأمان والسرعة العالية.'
  },
  {
    question: 'هل يمكنني رؤية سير العمل أثناء تطوير المشروع؟',
    answer: 'بالتأكيد! نتبع أسلوب التطوير المرن (Agile) ونوفر لك وصولاً مستمراً لرؤية التحديثات أسبوعياً لإبداء ملاحظاتك وضمان توافق العمل مع رؤيتك.'
  },
  {
    question: 'كيف يتم تحديد تكلفة المشروع؟',
    answer: 'يتم تحديد التكلفة بناءً على المتطلبات، الميزات المطلوبة، المنصات (ويب، آيفون، أندرويد)، والوقت المستغرق. نقدم لك عرض سعر تفصيلي وشفاف بعد الاجتماع الأولي المجاني.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-600 font-bold mb-2">الأسئلة الشائعة</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">إجابات لما قد يدور في ذهنك</h3>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border border-slate-200 rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-amber-400 bg-amber-50/30' : 'bg-white hover:border-amber-200'}`}
            >
              <button
                className="w-full px-6 py-5 text-right flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                <ChevronDown 
                  className={`text-amber-600 transition-transform duration-300 flex-shrink-0 mr-4 ${openIndex === index ? 'rotate-180' : ''}`}
                  size={24}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
