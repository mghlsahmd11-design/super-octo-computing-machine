import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white block mb-6">
              قمة <span className="text-amber-500">الرؤية</span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              شريكك الموثوق للتحول الرقمي وتطوير الأعمال. نقدم حلولاً برمجية وتسويقية متكاملة لمساعدة الشركات على تحقيق أهدافها في العصر الرقمي بكفاءة واحترافية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">الرئيسية</a></li>
              <li><a href="#features" className="hover:text-amber-500 transition-colors">عن الشركة</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">خدماتنا</a></li>
              <li><a href="#portfolio" className="hover:text-amber-500 transition-colors">أعمالنا</a></li>
              <li><a href="#faq" className="hover:text-amber-500 transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">الخدمات</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-amber-500 transition-colors">تطوير المواقع</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">تطبيقات الجوال</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">التسويق الرقمي</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">تصميم واجهات المستخدم</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">استضافة الشركات</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} قمة الرؤية للحلول التقنية. جميع الحقوق محفوظة.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-white transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
