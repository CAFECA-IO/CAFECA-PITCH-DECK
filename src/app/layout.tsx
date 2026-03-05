import React from 'react';
import '@/app/globals.css';

export const metadata = {
  title: 'CAFECA PITCH DECK',
  description: 'The official presentation deck of CAFECA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
