// Script导入已移除，因为未使用
import type { Metadata } from 'next';
import './globals.css';
import { Layout } from '@/components/layout';

export const metadata: Metadata = {
  title: 'PINLA',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="text-white">
        <Layout />
        {children}
      </body>
    </html>
  );
}
