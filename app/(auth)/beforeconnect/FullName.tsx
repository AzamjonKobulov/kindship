'use client';

import { useState, useRef } from 'react';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const FullName = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [disabled, setDisabled] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const onFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFirstName = e.target.value.trim();
    setFirstName(newFirstName);
    setDisabled(newFirstName === '');
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  // Reset FirstName Input
  const resetFirstNameInput = () => {
    setFirstName('');
    inputRef.current?.focus();
    setDisabled(true);
  };

  // Reset LastName Input
  const resetLastNameInput = () => {
    setLastName('');
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="relative flex items-center text-body border-b space-x-2 border-brand-gray-300">
        <label htmlFor="first-name" className="flex items-center pr-2">
          First Name
        </label>
        <input
          id="first-name"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={firstName}
          onChange={onFirstNameChange}
          placeholder=" "
        />
        <button
          type="button"
          onClick={resetFirstNameInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <div className="relative flex items-center text-body border-b  space-x-2 border-brand-gray-300">
        <label htmlFor="last-name" className="flex items-center pr-2">
          Last Name
        </label>
        <input
          id="last-name"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={lastName}
          placeholder=" "
          onChange={onLastNameChange}
        />
        <button
          type="button"
          onClick={resetLastNameInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      <p className="text-brand-gray-primary tracking-tight my-2">
        Last name is optional
      </p>

      <Link href="/connect">
        <Button disabled={disabled} className="mt-5 md:mt-7">
          Next
        </Button>
      </Link>
    </>
  );
};

export default FullName;
