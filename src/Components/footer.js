export default function Footer() {
  return (
    <footer className="bg-[#2E5237] text-white py-6">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold">Octavius Cafe</span>. All rights reserved.
        </p>
        <div className="mt-4 space-x-4 flex justify-center">
          <a
            href="#"
            className="text-[#FFD700] hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-[#FFD700] hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-[#FFD700] hover:scale-110 transition-transform"
            aria-label="Twitter"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
