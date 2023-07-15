import Link from 'next/link';

interface iButtonProps {
  children?: string;
  href?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<iButtonProps> = ({
  children,
  className,
  disabled,
  href,
  onClick,
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`w-full rounded-base py-3.5 disabled: ${
        disabled
          ? 'bg-brand-gray-400 pointer-events-none'
          : 'bg-brand-primary lg:hover:bg-brand-hover'
      } ${className}`}
    >
      <span
        className={`font-semibold text-body leading-4 inline-block ${
          disabled ? 'text-brand-gray-600' : 'text-white'
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default Button;
