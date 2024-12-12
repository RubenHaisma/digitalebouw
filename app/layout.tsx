import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Digitalebouw.nl - Professionele Website Ontwikkeling',
  description: 'Wij bouwen hoogwaardige websites op maat voor uw bedrijf. Expertise in custom development, e-commerce en SEO optimalisatie.',
  openGraph: {
    title: 'Digitalebouw.nl - Professionele Website Ontwikkeling',
    description: 'Wij bouwen hoogwaardige websites op maat voor uw bedrijf.',
    url: 'https://digitalebouw.nl',
    siteName: 'Digitalebouw.nl',
    images: [
      {
        url: 'https://digitalebouw.nl/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 flex flex-col items-center justify-center w-full">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}