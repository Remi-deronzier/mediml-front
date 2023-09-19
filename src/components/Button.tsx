import { ComponentProps } from 'react';

import { VariantProps, cva } from 'class-variance-authority';

import Loader from './Loader';

interface ButtonProps {
  label: string;
}

interface Props
  extends ButtonProps,
    ComponentProps<'button'>,
    VariantProps<typeof buttonOrLinkStyles> {}

const buttonOrLinkStyles = cva(
  'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  {
    variants: {
      isFullWidth: {
        true: 'w-full',
      },
      isLoading: {
        true: 'cursor-progress',
      },
      isDisabled: {
        true: 'cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        class: '',
      },
      {
        isLoading: false,
        isDisabled: false,
        class: 'hover:bg-indigo-500',
      },
      {
        isDisabled: true,
        class: 'bg-primary-disabled',
      },
    ],
    defaultVariants: {
      isFullWidth: false,
      isLoading: false,
      isDisabled: false,
    },
  }
);

export default function Button({
  label,
  isLoading,
  isDisabled,
  isFullWidth,
  ...props
}: Props) {
  const maybeIsDisabled = (isDisabled ?? false) || (isLoading ?? false);

  return (
    <button
      type="button"
      className={buttonOrLinkStyles({
        isDisabled: maybeIsDisabled,
        isLoading,
        isFullWidth,
      })}
      disabled={maybeIsDisabled}
      {...props}
    >
      {isLoading ? (
        <span className="relative">
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform">
            <Loader size={20} color="#fff" />
          </div>
          <span className="text-transparent">{label}</span>
        </span>
      ) : (
        label
      )}
    </button>
  );
}
