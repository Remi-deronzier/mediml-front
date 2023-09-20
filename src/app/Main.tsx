import { PropsWithChildren } from 'react';

export default function Main({ children }: PropsWithChildren) {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
  );
}
