'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/app/components/Base';
import { CheckIcon } from '@heroicons/react/20/solid';

interface CheckboxItem {
  id: number;
  label: string;
}

const data: CheckboxItem[] = [
  { id: 1, label: 'New to the NDIS' },
  { id: 2, label: 'Self-managed' },
  { id: 3, label: 'Plan-managed' },
  { id: 4, label: 'NDIA-managed' },
  { id: 5, label: "I don't know" },
];

const FullName = () => {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheckboxChange = (itemId: number) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems((prevItems) =>
        prevItems.filter((item) => item !== itemId)
      );
    } else {
      setCheckedItems((prevItems) => [...prevItems, itemId]);
    }
  };

  const isCheckboxChecked = (itemId: number) => checkedItems.includes(itemId);

  return (
    <>
      <div className="relative flex flex-col items-center text-body">
        {data.map((item) => (
          <label
            key={item.id}
            htmlFor={`tarif-${item.id}`}
            className="w-full flex items-center justify-between border-b 
            border-brand-gray-300 text-start cursor-pointer py-3"
          >
            <span>{item.label}</span>
            <input
              id={`tarif-${item.id}`}
              type="checkbox"
              className="hidden"
              checked={isCheckboxChecked(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {isCheckboxChecked(item.id) && (
              <CheckIcon className="w-4 h-5 shrink-0 text-brand-hover" />
            )}
          </label>
        ))}
      </div>
      <Link href="/premium">
        <Button disabled={checkedItems.length === 0} className="mt-5 md:mt-7">
          Next
        </Button>
      </Link>
    </>
  );
};

export default FullName;
