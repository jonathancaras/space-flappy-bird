import './globals.css';

export const metadata = {
  title: 'Space Flappy Bird',
  description: 'A space-themed Flappy Bird game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
