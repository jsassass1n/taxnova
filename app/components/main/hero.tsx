/* eslint-disable @next/next/no-img-element */

/* eslint-disable react/no-unescaped-entities */
export default function Hero() {
  return (
    <section className="bg-white pt-16 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:py-16">
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
            <form className="mx-auto max-w-lg lg:ml-0" action="#">
              <label
                htmlFor="default-search"
                className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="default-search"
                  className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 absolute right-2.5 bottom-2.5 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:ring-4 focus:outline-none"
                >
                  <svg
                    className="mr-2 -ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Search
                </button>
              </div>
            </form>
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
