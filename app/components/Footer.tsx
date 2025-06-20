// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="text-center py-10 text-sm text-[var(--colorText)] section-bg-4">
      © {new Date().getFullYear()} Alexandra Sutton
    </footer>
  );
}
