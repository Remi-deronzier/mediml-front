export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10 text-center">
      <p className="text-sm text-gray-500">
        &copy; {currentYear} MediMl. All rights reserved.
      </p>
    </footer>
  );
}
