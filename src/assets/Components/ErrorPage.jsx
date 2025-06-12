export const ErrorPage = ({section}) => {
    const fullURL = window.location.href;
  return (
    <>
      <section
        className="min-h-screen flex items-center flex-col justify-center bg-black py-20 px-6 md:px-12
        animation-slide bg-gradient-to-t from-gray-900 to-black"
      >
        <h1 className="text-6xl font-bold mb-4 text-red-500">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-center mb-2">
          You have entered a wrong URL — "<strong>{fullURL}</strong>" and
          section is <strong>{section}</strong> does not exist.
        </p>
      </section>
    </>
  );
};
 