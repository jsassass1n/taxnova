"use client";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6 dark:bg-gray-800">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
          <a href="https://flowbite.com" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <button
                  onClick={() => scrollTo("about")}
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Haqqımızda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("features")}
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Üstünlüklər
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("services")}
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Xidmətlər
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("pricing")}
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Qiymətlər
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("contact-us")}
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                >
                  Əlaqə
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
