import 'semantic-ui-css/semantic.min.css';
import './globals.css';
import { Lato } from 'next/font/google';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'BizBolt Consulting',
  description: 'Take care of your revenue operations today.',
  keywords: 'bizbolt, revops, revenue operations, consulting, optimization, automation, transformation'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <MenuBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};
