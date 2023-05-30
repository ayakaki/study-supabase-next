import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <nav className="mx-auto flex h-12 justify-between items-center">
          <Link href="/" className="text-2xl ml-4">
            supabaseTrial
          </Link>
          <Link href="/login" className="p-2 mr-12">
            ログイン
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
};

export const runtime = 'edge';

export default RootLayout;
