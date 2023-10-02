import Logo from '@assets/images/logo.svg?react';
import NavigationBar from '@components/NavigationBar';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-gray-50 text-sm font-medium text-gray-700">
      <div className="flex justify-between items-center px-4 py-4 sm:px-8">
        <div className="flex items-center">
          <span className="sr-only">MediMl</span>
          <NavigationBar />
        </div>
        <div>
          <Logo className="h-12 w-auto" />
        </div>
      </div>
    </header>
  );
}
