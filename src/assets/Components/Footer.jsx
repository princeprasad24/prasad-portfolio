export const Footer = ({ getTheme }) => {
  return (
    <>
      <footer
        className={`${
          getTheme
            ? "bg-black-200 text-white border-white/10"
            : "bg-white text-black border-black/10"
        } text-center py-6 border-t transition-all duration-300`}
      >
        <p
          className={`text-lg ${
            getTheme ? "text-gray-400" : "text-gray-600"
          } pt-3 mb-4`}
        >
          &copy; {new Date().getFullYear()} Prasad Gaikawad. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};
