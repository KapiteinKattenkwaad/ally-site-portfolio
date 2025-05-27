export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-center py-6 text-sm text-gray-500 bg-gray-50 border-t border-gray-200">
      &copy; {year} Alexandra Sutton. All rights reserved.
    </footer>
  );
}
