/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <section className="bg-white pt-16 dark:bg-gray-900">
      <div
        // ref={ref}
        className={`mx-auto max-w-7xl px-4 py-8 lg:py-16`}
      >
        <div className="mb-8 grid items-center gap-8 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
            <a
              href="#"
              className="mb-6 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            ></a>
            <h1 className="mb-4 text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl xl:text-6xl dark:text-white">
              Kiçik və orta biznes üçün etibarlı mühasibatlıq xidmətləri
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-500 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl dark:text-gray-400">
              Mühasibatlıq, vergi xidmətləri, hesabatlar…
            </p>
          </div>
          <div className="col-span-6">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup.png"
              className="dark:hidden"
              alt="mockup"
            />
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/search-mockup-dark.png"
              className="hidden dark:block"
              alt="mockup dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
