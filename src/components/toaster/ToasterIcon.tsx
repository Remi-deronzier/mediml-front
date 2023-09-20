import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

interface Props {
  type: 'success' | 'error';
}

export default function ToasterIcon({ type }: Props) {
  if (type === 'success') {
    return (
      <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
    );
  }

  if (type === 'error') {
    return (
      <ExclamationCircleIcon
        className="h-6 w-6 text-red-400"
        aria-hidden="true"
      />
    );
  }

  return null;
}
