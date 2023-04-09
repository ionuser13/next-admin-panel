import React from 'react';
import Header from '@components/Header';
import Nav from '@common/Nav';
import { useRouter } from 'next/router';

export default function MainLayout({ children }) {
  const router = useRouter();
  if(router.pathname === '/') {
    return (
      <>
        <div className="min-h-full">
          <Header />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="min-h-full">
          <Header />
          <Nav />
          <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </>
    );
  }
  
}
