import './globals.css';

export const metadata = {
  title: 'Kyle Gomez — Project Manager',
  description: 'Project Manager with 7+ years at the intersection of digital advertising, trust & safety, and data operations.',
  openGraph: {
    title: 'Kyle Gomez — Project Manager',
    description: 'Project Manager with 7+ years at the intersection of digital advertising, trust & safety, and data operations.',
    url: 'https://kylegomez.com',
    siteName: 'Kyle Gomez',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
