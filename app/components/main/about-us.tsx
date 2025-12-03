"use client";

import { useFadeOnScroll } from "@/app/hooks/hook";

export default function AboutUs() {
  const { ref, isVisible } = useFadeOnScroll();

  return (
    <section className={`scroll-mt-30 bg-white dark:bg-gray-900`} id="about">
      <div
        className={`${isVisible ? "visible" : ""} fade-section mx-auto max-w-7xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16`}
      >
        <div
          ref={ref}
          className={`font-light text-gray-500 sm:text-lg dark:text-gray-400`}
        >
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Mühasibatlıqda dəqiqliyi və şəffaflığı təmin edən etibarlı
            tərəfdaşınız
          </h2>
          <p className="mb-4">
            Finexa Accounting Solutions olaraq 2000+ fərqli biznesin maliyyə
            proseslərini gücləndirən peşəkar mühasibatlıq, vergi və hesabat
            xidmətləri təqdim edirik. Biz sahibkarları, maliyyə komandalarını və
            startapları daha sürətli qərar verməyə, riskləri azaltmağa və sabit
            inkişaf əldə etməyə dəstəkləyirik.
          </p>
        </div>
        <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
          <p className="mb-4">
            Müştərilərimizin fəaliyyətini real zamanlı izləmələrinə, bütün
            maliyyə əməliyyatlarını vahid platformadan idarə etmələrinə və
            hesabatlılığı artırmalarına şərait yaradırıq. Vergi dəyişikliklərinə
            vaxtında reaksiya vermək, hesabat dövrlərini problemsiz keçmək və
            maliyyə yükünü azaltmaq üçün tam inteqrasiya olunmuş həllər təqdim
            edirik.
          </p>
          <p>
            Peşəkar komandamız biznesinizin böyüməsini sürətləndirir — əlavə
            xərclər və ənənəvi mühasibatlıq çətinlikləri olmadan. Bizimlə
            əməliyyatlar şəffaf, proseslər səmərəli, nəticələr isə ölçülə
            biləndir.
          </p>
        </div>
      </div>
    </section>
  );
}
