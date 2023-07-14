'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [email, setEmail] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);
  const [validEmail, setValidEmail] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    const isValidEmail = newEmail === 'correct@gmail.com';

    setEmail(newEmail);
    setValidEmail(!isValidEmail || newEmail.length === 0);
    setDisabled(!isValidEmail || newEmail.length === 0);
  };

  // Reset Email Input
  const resetEmailInput = () => {
    setEmail('');
    inputRef.current?.focus();
    setDisabled(true);
  };

  return (
    <>
      <div
        className={`relative flex items-center text-body border-b  space-x-2 ${
          validEmail ? 'border-brand-warning-red' : 'border-brand-gray-300'
        }`}
      >
        <label htmlFor="phone-number" className="flex items-center pr-2">
          Email
        </label>
        <input
          id="first-number"
          type="email"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={email}
          placeholder="What’s your email?"
          onChange={onEmailChange}
        />
        <button
          type="button"
          onClick={resetEmailInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      {validEmail && (
        <p className="text-sm text-brand-warning-red my-2">
          Oops, that doesn't look right. Please try again
        </p>
      )}
      <Link href="/tariff">
        <Button disabled={disabled} className="mt-5 md:mt-7">
          Next
        </Button>
      </Link>
    </>
  );
};

export default FullName;
