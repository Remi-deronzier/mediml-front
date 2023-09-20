import Logo from '@assets/images/logo.svg?react';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
      <div className="flex px-4 py-4 sm:px-8">
        <span className="sr-only">MediMl</span>
        <Logo className="h-12 w-auto" />
      </div>
    </header>
  );
}
