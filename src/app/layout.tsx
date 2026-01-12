import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import { Quote } from '@/components/common/Quote';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Debangshu Chatterjee',
                url: 'https://www.debangshu.tech',
                jobTitle: 'GenAI & Full Stack Developer',
                worksFor: {
                  '@type': 'Organization',
                  name: 'Jadavpur University NLP Lab',
                },
                sameAs: [
                  'https://github.com/deba2k5',
                  'https://www.linkedin.com/in/deba2k5/',
                  'https://x.com/deba2k5',
                ],
                image: 'https://www.debangshu.tech/assets/logo.png',
                description:
                  'GenAI & Full Stack Developer specializing in Python, Deep Learning, and Next.js. SIH 2024 Runner Up.',
              }),
            }}
          />
        </head>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ReactLenis root>
              <Navbar />
              {children}
              <OnekoCat />
              <Quote />
              <Footer />
              <UmamiAnalytics />
            </ReactLenis>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
