import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { GoogleAnalytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website laten maken? Wij bouwen jouw succes online! - Digitalebouw.nl',
  description:
    'Wil jij een professionele website laten maken die écht scoort? Bij Digitalebouw.nl bouwen we websites op maat met razendsnelle SEO-optimalisatie en onweerstaanbare designs. Start vandaag!',
  openGraph: {
    title: 'Professionele websites laten maken - Digitalebouw.nl',
    description:
      'Je eigen website bouwen of laten maken? Digitalebouw.nl is jouw partner voor indrukwekkende designs, SEO-optimalisatie en winstgevende e-commerce websites. Ontdek meer!',
    url: 'https://digitalebouw.nl',
    siteName: 'Digitalebouw.nl',
    images: [
      {
        url: 'https://digitalebouw.nl/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Een prachtige website gebouwd door Digitalebouw.nl',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@digitalebouwnl',
    title: 'Website laten maken - Digitalebouw.nl',
    description:
      'Wij bouwen websites die jouw bedrijf online laten groeien. Vraag direct een offerte aan en ontdek wat wij voor jou kunnen betekenen!',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://digitalebouw.nl',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
        {/* SEO Meta Tags */}
        <meta
          name="keywords"
          content="Website bouwen, Website laten maken, Professionele websites, SEO websites, Betaalbare websites, Website ontwikkeling, Webdesign Nederland"
        />
        <meta
          name="description"
          content="Een website laten maken? Digitalebouw.nl helpt jouw bedrijf online te groeien met maatwerk websites, krachtige SEO en winstgevende e-commerce oplossingen."
        />
        <meta name="author" content="Digitalebouw.nl" />
        <meta name="theme-color" content="#1a73e8" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preload & Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://digitalebouw.nl",
            "name": "Digitalebouw.nl",
            "description":
              "Professionele websites laten maken die scoren! Wij helpen jouw bedrijf groeien met maatwerk webdesign, e-commerce en SEO-optimalisatie.",
            "publisher": {
              "@type": "Organization",
              "name": "Digitalebouw.nl",
              "logo": "https://digitalebouw.nl/logo.png",
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://digitalebouw.nl?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </head>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
        <GoogleAnalytics />
      </body>
    </html>
  );
}
