import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';
import './animations.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--poppins',
});

export const metadata = {
  title: 'Royal Frozen Foods',
  description: 'Eat',
  icons: './favicon.ico',
};

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
