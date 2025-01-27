import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { GoogleAnalytics } from '@/components/analytics';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalebouw.nl'),
  title: {
    default: 'Professionele Websites voor Bouwbedrijven | Digitalebouw.nl',
    template: '%s | Digitalebouw.nl'
  },
  description: 'Specialisten in websites en digitale oplossingen voor de bouwsector. Verhoog uw online zichtbaarheid en genereer meer leads met een professionele website.',
  keywords: [
    'website bouwbedrijf',
    'bouw website',
    'website aannemer',
    'bouwsector digitalisering',
    'bouw digitale transformatie',
    'website bouwsector',
    'online marketing bouw',
    'web development bouw',
    'bouwbedrijf online presence',
    'digitale strategie bouw'
  ],
  authors: [{ name: 'Digitalebouw.nl' }],
  creator: 'Digitalebouw.nl',
  publisher: 'Digitalebouw.nl',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://digitalebouw.nl',
    title: 'Digitalebouw.nl - Websites voor de Bouwsector',
    description: 'Specialisten in websites en digitale oplossingen voor de bouwsector. Verhoog uw online zichtbaarheid en genereer meer leads.',
    siteName: 'Digitalebouw.nl',
    images: [
      {
        url: 'https://digitalebouw.nl/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Digitalebouw.nl - Websites voor de Bouwsector',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitalebouw.nl - Websites voor de Bouwsector',
    description: 'Specialisten in websites en digitale oplossingen voor de bouwsector.',
    images: ['https://digitalebouw.nl/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="canonical" href="https://digitalebouw.nl" />
        <link rel="alternate" hrefLang="nl" href="https://digitalebouw.nl" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Digitalebouw.nl",
              "image": "https://digitalebouw.nl/images/logo.png",
              "description": "Specialisten in websites en digitale oplossingen voor de bouwsector.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Biltstraat 160",
                "addressLocality": "Utrecht",
                "postalCode": "3572 AS",
                "addressCountry": "NL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "52.0843114",
                "longitude": "5.1204094"
              },
              "url": "https://digitalebouw.nl",
              "telephone": "+31-649753682",
              "priceRange": "€€",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/digitalebouw",
                "https://www.facebook.com/digitalebouw"
              ]
            })
          }}
        />
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