import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/5 transform skew-x-12 translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-amber-400 font-bold mb-2">تواصل معنا</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">نحن هنا لتحويل فكرتك إلى واقع</h3>
            <p className="text-slate-400 text-lg">
              املأ النموذج وسنقوم بالرد عليك في أقرب وقت، أو تواصل معنا مباشرة عبر القنوات المتاحة.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-300 text-sm mb-1">رقم الهاتف</h4>
                    <p className="text-white font-bold text-lg" dir="ltr">+966 50 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-300 text-sm mb-1">البريد الإلكتروني</h4>
                    <p className="text-white font-bold text-lg">hello@qima.tech</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-300 text-sm mb-1">العنوان</h4>
                    <p className="text-white font-bold text-lg">الرياض، طريق الملك فهد، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a href="#" className="w-full bg-[#25D366] hover:bg-[#20b858] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#25D366]/20">
                  <MessageCircle size={24} />
                  تحدث معنا عبر واتساب
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-slate-800" onSubmit={(e) => e.preventDefault()}>
              <h4 className="text-2xl font-bold mb-6 text-slate-900">أرسل رسالتك</h4>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">الاسم الكامل <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="أحمد محمد" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">رقم الهاتف <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="05xxxxxxxx" required />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2">البريد الإلكتروني</label>
                <input type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="example@domain.com" />
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 mb-2">بم تفكر؟ (تفاصيل المشروع) <span className="text-red-500">*</span></label>
                <textarea rows={5} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none" placeholder="حدثنا عن مشروعك أو الخدمة التي تحتاجها المساعدة فيها..." required></textarea>
              </div>
              
              <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-amber-600/30 text-lg">
                إرسال الطلب
                <Send size={20} className="rotate-180" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
