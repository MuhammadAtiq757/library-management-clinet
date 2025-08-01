
const Banner= () => {
  return (
    <section className="bg-gray-900 lg:grid  lg:place-content-center ">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-4xl font-bold  sm:text-5xl text-white">
            Empower Your Reading Journey with
            <strong className="text-indigo-600"> Easy Borrowing</strong>
          </h1>

          <p className="mt-4 text-base text-pretty  sm:text-lg/relaxed text-gray-200">
            Discover, borrow, and track your favorite books all in one place. Our library
            management system makes it simple to manage your reading experience efficiently.
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="/create-book"
            >
              Browse Books
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              href="/about"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
