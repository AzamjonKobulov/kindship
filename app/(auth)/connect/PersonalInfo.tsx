'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

import { Button } from '@/app/components/Base';
import { XCircleIcon } from '@heroicons/react/20/solid';

const FullName = () => {
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [showError, setShowError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    formValidity();
  }, [lastName, number, date]);

  const formValidity = () => {
    if (lastName.trim() !== '' && number.length === 9 && date.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const onLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    setShowError(e.target.value.length !== 9);
  };

  const onDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  // Reset LastName Input
  const resetLastNameInput = () => {
    setLastName('');
    inputRef.current?.focus();
  };

  // Reset Number Input
  const resetNumberInput = () => {
    setNumber('');
    setShowError(false);
    inputRef.current?.focus();
  };

  console.log(disabled);

  const handleButtonClick = () => {
    if (disabled) {
      // Button is disabled, do nothing
      return;
    }
    // Handle button click logic here
    // ...
  };

  return (
    <>
      <div className="relative flex items-center text-body border-b  space-x-2 border-brand-gray-300">
        <label htmlFor="phone-number" className="flex items-center pr-2">
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
      <div className="relative flex items-center text-body border-b  space-x-2 border-brand-gray-300">
        <label htmlFor="phone-number" className="flex items-center pr-2">
          Date of birth
        </label>
        <input
          id="dateofbirth"
          type="date"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={date}
          onChange={onDateChange}
        />
      </div>
      <div
        className={`relative flex items-center text-body border-b  space-x-2 ${
          showError ? 'border-brand-warning-red' : 'border-brand-gray-300'
        }`}
      >
        <label htmlFor="phone-number" className="flex items-center pr-2">
          NDIS number
        </label>
        <input
          id="ndis-number"
          type="text"
          className="w-full flex-1 caret-[#446BF2] py-2.5 peer"
          value={number}
          placeholder=" "
          onChange={onNumberChange}
        />
        <button
          type="button"
          onClick={resetNumberInput}
          className="peer-focus:block peer-placeholder-shown:hidden"
        >
          <XCircleIcon className="w-5 h-5 text-brand-gray-primary absolute right-0 top-1/2 -translate-y-1/2" />
        </button>
      </div>
      {showError && (
        <p className="text-sm text-brand-warning-red my-2">
          Oops, that doesn't look right. Please try again
        </p>
      )}
      <p className="text-brand-gray-primary tracking-tight my-2">
        Your child's NDIS number (this should be 9 digits). You'll be able to
        add more children later.
      </p>
      <Link href="/email">
        <Button
          disabled={disabled}
          onClick={handleButtonClick}
          className="mt-5 md:mt-7"
        >
          Agree and continue
        </Button>
      </Link>

      <div className="text-center">
        <p className="mt-5 tracking-tight font-sf-pro-display">
          By tapping "Agree and continue" you agree to our
        </p>
        <Link
          href="/connect/agreement"
          className="text-brand-primary underline underline-offset-4"
        >
          Service Agreement
        </Link>
      </div>
    </>
  );
};

export default FullName;