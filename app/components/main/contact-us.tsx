/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFadeOnScroll } from "@/app/hooks/hook";
import { Spinner } from "flowbite-react";
import { useState } from "react";

export default function ContactUs() {
  const { ref, isVisible } = useFadeOnScroll();
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.target);

    const res = await fetch("/api/client", {
      method: "POST",
      body: JSON.stringify({
        firstName: form.get("firstName"),
        lastName: form.get("lastName"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
      headers: { "Content-Type": "application/json" },
    });

    await res.json();

    if (res.ok) {
      setSuccess(true); // показать сообщение
      e.target.reset(); // очистить форму

      setTimeout(() => setSuccess(false), 3000); // убрать через 3 сек
    }
    setLoading(false);
    e.target.reset();
  }

  return (
    <section className="bg-white dark:bg-gray-900" id="contact-us">
      <div
        ref={ref}
        className={`${isVisible ? "visible" : ""} fade-section bg-gray-700 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply`}
      >
        <div className="mx-auto max-w-screen-sm px-4 pt-8 pb-72 text-center lg:px-6 lg:pt-24 lg:pb-80">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Bizimlə əlaqə saxlayın
          </h2>
          <p className="mb-16 font-light text-gray-400 sm:text-xl">
            Sualınız, müraciətiniz və ya xidmətlərimizlə bağlı ehtiyacınız
            varsa, komandamız sizə tez bir zamanda cavab verməyə hazırdır.
            Biznesinizin mühasibatlıq və vergi proseslərini daha səmərəli etmək
            üçün daim sizin yanınızdayıq.
          </p>
        </div>
      </div>
      <div
        ref={ref}
        className={`${isVisible ? "visible" : ""} fade-section mx-auto -mt-96 max-w-screen-xl px-4 py-16 sm:py-24 lg:px-6`}
      >
        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-16 grid max-w-screen-md grid-cols-1 gap-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:grid-cols-2 lg:mb-28 dark:border-gray-700 dark:bg-gray-800"
        >
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Ad
            </label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Ad"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Soyad
            </label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Soyad"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email ünvanınız
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="name@taxnova.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Telefon nömrəsi
            </label>
            <input
              type="number"
              name="phone"
              id="phone-number"
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="+994-55-555-55-55"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Suallarınız
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              placeholder="Suallarınız..."
            ></textarea>
            <p className="mt-4 text-sm text-gray-500">
              Bu formanı göndərməklə siz şərtlər və qaydalar ilə, həmçinin
              məxfilik siyasəti ilə razılaşırsınız. Toplana biləcək məlumatların
              necə istifadə olunduğu və üçüncü tərəflərlə paylaşılması barədə
              daha ətraflı məlumat bu sənədlərdə göstərilmişdir.
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none sm:w-fit"
            >
              {loading && <Spinner />}
              {!loading && "Göndər"}
            </button>
            {success && (
              <p className="mt-7 flex h-10 w-[200px] items-center justify-center rounded bg-green-600 font-bold text-white">
                Göndərildi!
              </p>
            )}
          </div>
        </form>
        <div className="space-y-8 text-center md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
          <div>
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 lg:h-16 lg:w-16 dark:bg-gray-800">
              <svg
                className="h-5 w-5 text-gray-600 lg:h-8 lg:w-8 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Email us:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="mailto:abc@example.com"
              className="text-primary-600 dark:text-primary-500 font-semibold hover:underline"
            >
              hello@flowbite.com
            </a>
          </div>
          <div>
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 lg:h-16 lg:w-16 dark:bg-gray-800">
              <svg
                className="h-5 w-5 text-gray-600 lg:h-8 lg:w-8 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Call us:</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <span className="text-primary-600 dark:text-primary-500 font-semibold">
              +1 (646) 786-5060
            </span>
          </div>
          <div>
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 lg:h-16 lg:w-16 dark:bg-gray-800">
              <svg
                className="h-5 w-5 text-gray-600 lg:h-8 lg:w-8 dark:text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="mb-2 text-xl font-bold dark:text-white">Support</p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="#"
              className="text-primary-600 border-primary-600 hover:bg-primary-600 focus:ring-primary-300 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-600 dark:focus:ring-primary-800 inline-flex rounded-lg border px-4 py-2 text-center text-sm font-medium hover:text-white focus:ring-4 focus:outline-none dark:hover:text-white"
            >
              Support center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
