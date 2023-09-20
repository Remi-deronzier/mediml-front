import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

interface Props {
  type: 'danger' | 'success';
}

export default function ModalIcon({ type }: Props) {
  if (type === 'danger') {
    return (
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50">
        <ExclamationTriangleIcon
          className="h-6 w-6 text-yellow-400"
          aria-hidden="true"
        />
      </div>
    );
  }

  if (type === 'success') {
    return (
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
        <CheckCircleIcon
          className="text-success h-6 w-6 text-green-400"
          aria-hidden="true"
        />
      </div>
    );
  }

  return null;
}
