'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 ${isRTL ? 'rtl' : ''}`}>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 bg-clip-text text-transparent">
              {t.privacy?.title || 'سياسة الخصوصية'}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.privacy?.subtitle || 'نلتزم بحماية خصوصيتك وبياناتك الشخصية'}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-gray-700">
            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.dataCollection?.title || 'جمع البيانات'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.dataCollection?.content || 
                  `نقوم بجمع البيانات الشخصية عند التسجيل في دوراتنا أو استخدام خدماتنا. تشمل هذه البيانات:
                  الاسم، البريد الإلكتروني، رقم الهاتف، ومعلومات الدفع عند الاشتراك في الدورات المدفوعة.
                  نستخدم هذه البيانات لتقديم خدماتنا التعليمية والتواصل معكم بشأن الدورات والتحديثات.`}
              </p>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.dataUsage?.title || 'استخدام البيانات'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.dataUsage?.content || 
                  `نستخدم بياناتك لتقديم خدمات تعليمية عالية الجودة، تحسين تجربة التعلم، وإرسال معلومات
                  حول الدورات والخدمات. كما قد نستخدم البيانات لإجراء استبيانات وأخذ الآراء بهدف تطوير
                  منصتنا وتقديم تجربة استخدام أكثر سهولة وفعالية.`}
              </p>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.dataProtection?.title || 'حماية البيانات'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.dataProtection?.content || 
                  `نتخذ إجراءات أمنية فنية وتنظيمية لحماية بياناتك من الوصول غير المصرح به أو التغيير
                  أو الإفصاح. يتم التعامل مع البيانات بشكل آلي (إلكتروني) من خلال تطبيقات وبرامج محددة،
                  ولا يتم مشاركة هذه البيانات مع أطراف خارجية إلا إذا كانت ضرورية لتنفيذ طلبك.`}
              </p>
            </section>

            {/* Third Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.thirdParty?.title || 'خدمات الطرف الثالث'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.thirdParty?.content || 
                  `قد يحتوي موقعنا على روابط لمواقع إلكترونية أخرى تقع خارج سيطرتنا. لا تغطيها سياسة
                  الخصوصية هذه، وننصحك بقراءة سياسات الخصوصية الخاصة بتلك المواقع عند زيارتها.`}
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.userRights?.title || 'حقوق المستخدم'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.userRights?.content || 
                  `لديك الحق في الوصول إلى بياناتك وتصحيحها أو حذفها. يمكنك طلب نسخة من بياناتك
                  الشخصية أو طلب تعديلها في أي وقت. كما يمكنك إلغاء الاشتراك في رسائلنا البريدية.`}
              </p>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.updates?.title || 'تحديثات السياسة'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.updates?.content || 
                  `نظراً للتطور التكنولوجي الهائل والتغير في القوانين المتعلقة بالمجال الإلكتروني،
                  نحتفظ بالحق في تعديل بنود سياسة الخصوصية هذه في أي وقت نراه مناسباً. يتم تنفيذ
                  التعديلات على هذه الصفحة وإخطاركم في حالة إجراء أي تعديلات ذات تأثير.`}
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                {t.privacy?.contact?.title || 'التواصل معنا'}
              </h2>
              <p className="leading-relaxed">
                {t.privacy?.contact?.content || 
                  `إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، فلا تتردد في التواصل معنا
                  عبر البريد الإلكتروني أو نموذج الاتصال المتاح على موقعنا.`}
              </p>
            </section>

            {/* Final Statement */}
            <div className="mt-12 p-6 bg-green-50 rounded-xl border border-green-200">
              <p className="text-center text-green-800 font-medium">
                {t.privacy?.finalStatement || 
                  `نحن ملتزمون بالحفاظ على خصوصية بياناتك الشخصية وسريتها في كافة الأوقات.
                  لن نقوم بالبيع أو التأجير أو المتاجرة ببياناتك لمصلحة أي طرف ثالث خارج هذا الموقع.`}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
