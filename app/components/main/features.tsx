"use client";
import { useFadeOnScroll } from "@/app/hooks/hook";

export default function Features() {
  const { ref, isVisible } = useFadeOnScroll();
  return (
    <section className="bg-white dark:bg-gray-900" id="features">
      <div
        ref={ref}
        className={`${isVisible ? "visible" : ""} fade-section mx-auto max-w-7xl px-4 py-8 text-center sm:py-16 lg:px-6`}
      >
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Niyə TaxNova?
        </h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400">
          Aşağıda TaxNova-nı seçməyiniz üçün əsas səbəblərdən bəziləri ilə tanış
          ola bilərsiniz.
        </p>
        <div className="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3">
          <div>
            <svg
              className="text-primary-600 dark:text-primary-500 mx-auto mb-4 h-12 w-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Tam təhlükəsiz məlumat mühafizəsi
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Biz bütün maliyyə sənədlərinizi və əməliyyatlarınızı ən yüksək
              səviyyəli şifrələmə və təhlükəsizlik standartları ilə qoruyuruq.
              Məlumatlarınız yalnız sizin nəzarətinizdə qalır.
            </p>
          </div>
          <div>
            <svg
              className="text-primary-600 dark:text-primary-500 mx-auto mb-4 h-12 w-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Vergi və hesabat zəmanəti
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              TaxNova mütəxəssisləri bütün vergi bəyannamələrinin düzgün
              hazırlanmasına və vaxtında təqdim edilməsinə zəmanət verir.
              Səhvlər, cərimələr və gözlənilməz risklər minimuma endirilir.
            </p>
          </div>
          <div>
            <svg
              className="text-primary-600 dark:text-primary-500 mx-auto mb-4 h-12 w-12"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Peşəkar yanaşma və şəffaflıq
            </h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Biz maliyyə göstəricilərinizə real zamanlı nəzarət, şəffaf
              hesabatlar və optimallaşdırılmış proseslər təqdim edirik. Bütün
              qərarlar dəqiq analitikaya əsaslanır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
