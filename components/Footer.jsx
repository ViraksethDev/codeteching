// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gray-950/70 backdrop-blur-xl text-gray-400">
      {/* Optional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-gray-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand / Logo column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[2px]">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-950 font-bold text-white text-lg">
                  S
                </div>
              </div>
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-2xl font-semibold text-transparent">
                YourBrand
              </span>
            </div>
            <p className="mt-4 text-sm leading-6">
              Building tomorrow's tools, today.
            </p>
            <p className="mt-3 text-xs">
              © {new Date().getFullYear()} YourBrand. All rights reserved.
            </p>
          </div>

          {/* Navigation columns */}
          <div>
            <h3 className="text-sm font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><FooterLink href="#features">Features</FooterLink></li>
              <li><FooterLink href="#pricing">Pricing</FooterLink></li>
              <li><FooterLink href="#integrations">Integrations</FooterLink></li>
              <li><FooterLink href="#changelog">Changelog</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><FooterLink href="#about">About</FooterLink></li>
              <li><FooterLink href="#blog">Blog</FooterLink></li>
              <li><FooterLink href="#careers">Careers</FooterLink></li>
              <li><FooterLink href="#press">Press</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><FooterLink href="#help">Help Center</FooterLink></li>
              <li><FooterLink href="#docs">Documentation</FooterLink></li>
              <li><FooterLink href="#api">API Reference</FooterLink></li>
              <li><FooterLink href="#status">Status</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><FooterLink href="#privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#terms">Terms of Service</FooterLink></li>
              <li><FooterLink href="#cookies">Cookie Policy</FooterLink></li>
              <li><FooterLink href="#security">Security</FooterLink></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <FooterLink href="https://twitter.com/yourbrand">Twitter</FooterLink>
            <FooterLink href="https://github.com/yourbrand">GitHub</FooterLink>
            <FooterLink href="https://linkedin.com/company/yourbrand">LinkedIn</FooterLink>
            <FooterLink href="https://discord.gg/yourbrand">Discord</FooterLink>
          </div>

          <div className="text-gray-500">
            Made with ♥ in {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable footer link component
function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="transition-colors hover:text-indigo-400 hover:underline underline-offset-4 decoration-indigo-500/40"
    >
      {children}
    </a>
  );
}