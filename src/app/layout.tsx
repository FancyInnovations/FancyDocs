import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
      <html lang="en" className={inter.className} suppressHydrationWarning>
      <link rel="icon" type="image/x-icon" href="/favicon.png"/>

      <body className="flex flex-col min-h-screen">
      <RootProvider>{children}</RootProvider>
      </body>
      </html>
  );
}
