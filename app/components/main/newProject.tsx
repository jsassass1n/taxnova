"use client";

import { Carousel } from "flowbite-react";

export default function NewProject() {
  return (
    <section className="bg-white pt-16 dark:bg-gray-900">
      <div
        id="controls-carousel"
        className="relative w-full"
        data-carousel="static"
      >
        <div className="rounded-base relative h-56 overflow-hidden md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://plus.unsplash.com/premium_photo-1682125748265-d362c809ba04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1682125748265-d362c809ba04?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>
        <button
          type="button"
          className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span className="rounded-base inline-flex h-10 w-10 items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg
              className="h-5 w-5 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span className="rounded-base inline-flex h-10 w-10 items-center justify-center bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg
              className="h-5 w-5 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
  );
}
