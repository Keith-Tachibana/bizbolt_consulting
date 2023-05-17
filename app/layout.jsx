import 'semantic-ui-css/semantic.min.css';
import './globals.css';
import { Khand, Oswald, Kaisei_Tokumin, Bitter } from 'next/font/google';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

const khand = Khand({ subsets: ['latin'], weight: ['400', '700'] });
const oswald = Oswald({ subsets: ['latin'], weight: ['400', '700'] });
const kaisei = Kaisei_Tokumin({ subsets: ['latin'], weight: ['400', '700'] });
const bitter = Bitter({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'BizBolt Consulting',
  description: 'Take care of your revenue operations today.',
  keywords: 'bizbolt, revops, revenue operations, consulting, optimization, automation, transformation'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={khand.className}>
        <MenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
