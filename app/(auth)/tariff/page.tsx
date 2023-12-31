import Link from 'next/link';

import { Arrowleft } from '@/app/components/Icons';
import Tariff from '@/app/(auth)/tariff/Tariff';

const Connect = () => {
  return (
    <>
      <div className="md:text-center">
        <Link
          href="/email"
          className="inline-flex lg:hidden items-center text-brand-primary space-x-1.5"
        >
          <Arrowleft />
          <span className="text-[17px] leading-5">Back</span>
        </Link>
        <h2 className="font-sf-pro-display font-bold text-3xl leading-8 tracking-wide mt-4 lg:mt-0">
          Thanks! Tell us, how are you currently managing your plan?
        </h2>
        <p className="text-brand-gray-primary text-body leading-6 tracking-tight whitespace-pre-line mt-4 md:px-2">
          Select from the options below.
        </p>
      </div>
      <div className="max-w-md mx-auto md:px-6 mt-8">
        <Tariff />
      </div>
    </>
  );
};

export default Connect;
