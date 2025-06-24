// app/components/Footer.tsx
export default function Footer() {
  const getCurrentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-10 text-sm text-[var(--colorText)] bg-[var(--background)]/80 border-t border-[var(--accent)]/30">
      © {getCurrentYear} by Alexandra Sutton.
    </footer>
  );
}
