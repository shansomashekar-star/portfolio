import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "Work", href: "#value" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { name: "GitHub", href: "https://github.com/shanmuganathansomashekar", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/shanmuganathansomashekar", icon: Linkedin },
  { name: "Email", href: "mailto:shan.somashekar@gmail.com", icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm">
            <span className="font-medium text-foreground">Shan Somashekar</span>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {social.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors p-1"
                  aria-label={s.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
        <p className="mt-4 text-center sm:text-left text-xs text-muted-foreground">
          © {year} Shanmuganathan Somashekar
        </p>
      </div>
    </footer>
  );
}
