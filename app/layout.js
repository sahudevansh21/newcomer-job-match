import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>Newcomer Job Match</title>
        <meta name="description" content="Platform helping immigrants find jobs that recognize foreign qualifications." />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}