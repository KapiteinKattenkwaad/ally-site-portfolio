export default function Socials() {

  return (
    <div className="flex justify-center mt-8">
      <a
        href="https://www.linkedin.com/in/alexandra-sutton/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="inline-flex items-center text-[var(--colorText)] hover:text-[var(--accent)] transition-colors text-lg"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="4" fill="none" />
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667h-3.554v-11.5h3.414v1.569h.049c.476-.899 1.637-1.849 3.369-1.849 3.602 0 4.267 2.368 4.267 5.455v6.325zm-14.693-13.452c-1.144 0-2.072-.928-2.072-2.072 0-1.143.928-2.071 2.072-2.071s2.072.928 2.072 2.071c0 1.144-.928 2.072-2.072 2.072zm1.777 13.452h-3.554v-11.5h3.554v11.5z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
