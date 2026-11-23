const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.54h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.05c0-1.2-.02-2.75-1.78-2.75-1.78 0-2.05 1.3-2.05 2.66V21h-4V9.75Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5A3.95 3.95 0 0 0 16.25 3.8h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-2.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M17.75 3h3.06l-6.68 7.64L22 21h-6.16l-4.83-6.31L5.48 21H2.42l7.15-8.17L2 3h6.32l4.36 5.77L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.58l11.09 14.43Z",
  },
];

/** Footer social icons (inline SVG – no extra dependencies). */
export function SocialLinks() {
  return (
    <ul className="flex items-center gap-2">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noreferrer"
            aria-label={l.label}
            className="focus-ring glass flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:scale-110 hover:text-gold-300"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d={l.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
