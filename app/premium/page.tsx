import Image from 'next/image';
import Link from 'next/link';

import ButtonWithIcon from '../components/Base/ButtonWithIcon';

const Premium = () => {
  return (
    <div>
      <div className="text-center">
        <div className="flex items-center justify-center">
          <svg
            width="54"
            height="49"
            viewBox="0 0 54 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.5144 3.04056C23.7276 3.04056 20.9213 3.88412 18.4673 4.78727C13.8103 6.50113 10.3167 10.1925 7.64528 14.2971C5.64246 17.3746 3.6911 20.486 3.6911 24.2598C3.6911 35.7195 14.4739 45.9966 26.5144 45.9966C30.8531 45.9966 36.7756 44.5747 40.1806 42.5032C42.0837 41.3455 43.1005 39.5529 44.1821 37.6462C44.5203 37.05 44.8648 36.4425 45.2448 35.8398C47.509 32.2485 49.7539 28.3017 49.7539 24.001C49.7539 16.7836 44.4746 10.7046 38.5851 7.00131C35.1234 4.82462 30.9716 3.04056 26.5144 3.04056ZM0.5 24.2598C0.5 18.8179 2.94401 14.4291 6.11912 10.3508C10.8502 4.27412 15.6802 0 24.2945 0C27.1157 0 31.1927 0.028478 34.2841 0.905702C37.247 1.74649 39.4111 3.30472 41.4386 4.76458C41.6916 4.94672 41.9424 5.12732 42.1924 5.30481C48.5157 9.79424 53.5 15.9688 53.5 24.001C53.5 32.286 49.2098 40.1065 42.2618 44.6381C37.8459 47.5181 32.1084 48.8431 26.5144 48.8431C12.1189 48.8431 0.5 37.8104 0.5 24.2598ZM26.7005 9.36243C24.9105 9.36243 21.5499 10.411 19.9737 10.9931C16.9826 12.0978 15.4467 14.6385 14.0228 17.2175C12.599 19.7964 12.0413 21.9825 12.0413 24.4149C12.0413 31.801 18.2931 35.692 22.3244 37.6072C25.4267 39.0811 30.288 38.9424 32.4751 37.6072C32.8006 37.4085 33.2006 37.1812 33.64 36.9316C35.3663 35.9509 37.7005 34.6247 38.5172 33.3249C39.9715 31.0102 41.627 27.02 41.627 24.2481C41.627 19.5963 39.2415 14.9361 35.4587 12.5492C33.2353 11.1463 29.5633 9.36243 26.7005 9.36243ZM9.03183 24.2481C9.03183 20.7406 10.3838 16.7338 12.4232 14.1053C15.4619 10.1887 19.7518 6.50444 25.2847 6.50444C27.0967 6.50444 31.4256 7.43524 33.4111 8.00069C34.8957 8.42343 36.4257 9.77897 37.7069 10.9141C38.2729 11.4156 38.7904 11.8741 39.234 12.1901C43.2954 15.0837 44.8009 19.9406 44.8009 25.1176C44.8009 30.4575 41.5851 36.86 37.1224 39.7807C34.2861 41.6371 30.2934 42.1148 26.7005 42.1148C23.605 42.1148 19.6206 41.1112 16.9663 39.4216C12.8071 35.0526 9.03183 30.058 9.03183 24.2481ZM20.738 20.436C21.8569 18.6086 22.5067 17.5473 25.6884 17.5473C27.3995 17.5473 29.7197 17.9989 31.0486 18.8327C33.3097 20.2511 34.3304 21.3957 34.3304 24.1601C34.3304 25.8074 34.3277 27.22 33.4585 28.5956C33.3126 28.8265 33.1803 29.0591 33.0505 29.2875C32.6352 30.0178 32.2449 30.7044 31.5143 31.1479C30.207 31.9413 27.7246 32.2081 25.6884 31.6444C25.3324 31.5458 24.9864 31.4569 24.6516 31.3709C22.1564 30.7297 20.2794 30.2474 19.5077 27.1199C18.9883 25.015 19.3786 22.5575 20.1474 21.3788C20.3649 21.0454 20.5576 20.7307 20.738 20.436ZM18.4377 18.8327C17.2188 20.3947 16.2805 22.0758 16.2805 24.1601C16.2805 29.3504 20.5815 35.1102 26.5635 34.3896C27.1363 34.3206 27.692 34.2688 28.2282 34.2189C30.1679 34.0382 31.8537 33.8812 33.1818 33.017C35.8492 31.2813 37.0653 26.9379 37.0653 23.7646C37.0653 20.688 35.6094 18.1635 33.1818 16.4439C32.5615 16.0046 31.4675 15.7497 30.4264 15.5071C30.0154 15.4113 29.6127 15.3175 29.2506 15.2149C24.0448 13.7411 21.4204 15.0104 18.4377 18.8327Z"
              fill="#DC734C"
            />
          </svg>
        </div>
        <h3 className="text-brand-primary text-3xl font-bold mt-3.5">
          Kindship Premium
        </h3>
        <p className="text-brand-gray-500 text-xl mt-1">
          We've started working with <br /> you right now!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-12">
        <Link
          href="/"
          className="border border-brand-gray-divider rounded-4xl space-y-5 lg:space-y-7 p-3.5 lg:p-5"
        >
          <span>
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26"
                cy="26"
                r="26"
                fill="#DC734C"
                fill-opacity="0.11"
              />
              <path
                d="M20.6191 37.3212C18.1983 37.3212 16.876 35.9989 16.876 33.5568V17.614C16.876 15.1826 18.1983 13.8496 20.6191 13.8496H25.8871C27.4654 13.8496 28.3292 14.1162 29.3636 15.1613L34.4823 20.3334C35.5381 21.3998 35.7834 22.2316 35.7834 23.8952V33.5568C35.7834 35.9882 34.461 37.3212 32.0403 37.3212H20.6191ZM20.9496 34.5699H31.7097C32.6161 34.5699 33.032 34.1113 33.032 33.2582V24.5563H27.8706C26.0257 24.5563 25.1406 23.6819 25.1406 21.8263V16.6009H20.9496C20.0432 16.6009 19.6273 17.0702 19.6273 17.9233V33.2582C19.6273 34.1113 20.0432 34.5699 20.9496 34.5699ZM28.0732 22.2955H32.8187L27.4014 16.8249V21.6237C27.4014 22.0823 27.6147 22.2955 28.0732 22.2955ZM29.9181 27.105C30.3234 27.105 30.6326 27.4036 30.6326 27.7982C30.6326 28.2034 30.3234 28.5127 29.9181 28.5127H22.6132C22.1867 28.5127 21.8881 28.2034 21.8881 27.7982C21.8881 27.4036 22.1867 27.105 22.6132 27.105H29.9181ZM29.9181 30.4216C30.3234 30.4216 30.6326 30.7415 30.6326 31.1467C30.6326 31.5413 30.3234 31.8399 29.9181 31.8399H22.6132C22.1867 31.8399 21.8881 31.5413 21.8881 31.1467C21.8881 30.7415 22.1867 30.4216 22.6132 30.4216H29.9181Z"
                fill="#DC734C"
              />
            </svg>
          </span>
          <div>
            <h4 className="font-bold text-xl">Payment Provider</h4>
            <p className="text-brand-gray-700 text-lg lg:text-xl mt-1">
              Coming soon
            </p>
          </div>
        </Link>
        <Link
          href="/"
          className="border border-brand-gray-divider rounded-4xl space-y-5 lg:space-y-7 p-3.5 lg:p-5"
        >
          <span>
            <svg
              width="62"
              height="58"
              viewBox="0 0 62 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26"
                cy="32"
                r="26"
                fill="#DC734C"
                fill-opacity="0.11"
              />
              <path
                d="M17.4692 43.4025C15.0378 43.4025 13.7048 42.0802 13.7048 39.6595V29.3793C13.7048 27.0652 14.1421 26.6066 15.6777 25.5189L23.2918 19.9203C24.3476 19.1631 25.0194 18.7686 26.0005 18.7686C26.9923 18.7686 27.6641 19.1631 28.7198 19.9203L36.334 25.5189C37.8803 26.6173 38.2962 27.0652 38.2962 29.3793V39.6595C38.2962 42.0802 36.9632 43.4025 34.5317 43.4025H17.4692ZM28.3999 32.3226L28.8691 32.7918L34.4784 27.2145L27.2482 21.8291C26.779 21.4772 26.4697 21.2959 26.0005 21.2959C25.5313 21.2959 25.222 21.4772 24.7528 21.8291L17.4479 27.2678L22.9932 32.7811L23.4625 32.3226C24.2729 31.5334 25.0727 31.1709 25.9365 31.1709C26.8003 31.1709 27.6001 31.5334 28.3999 32.3226ZM35.7581 29.2407C35.7581 29.1873 35.7581 29.1447 35.7581 29.102L30.4687 34.3594L35.7581 39.5635C35.7581 39.4995 35.7581 39.5315 35.7581 39.4675V29.2407ZM16.2429 29.2407V39.4248L21.4043 34.3487L16.2429 29.23V29.2407ZM24.8381 34.0821L18.0238 40.8112H33.8492L27.0349 34.0821C26.6083 33.6556 26.2884 33.4956 25.9365 33.4956C25.5846 33.4956 25.2647 33.6662 24.8381 34.0821Z"
                fill="#DC734C"
              />
              <path
                d="M51.8551 10.5719L51.0492 11.7176C50.7394 12.158 50.0707 12.0214 49.9585 11.4948L49.6666 10.1248C49.4068 8.90564 48.7096 7.835 47.7124 7.12386L46.3386 6.1442C45.9019 5.83273 46.0447 5.13358 46.5686 5.01839L48.1651 4.66738C49.3921 4.3976 50.4759 3.65641 51.1925 2.59694L52.0224 1.37008C52.3303 0.914783 53.0173 1.05513 53.122 1.59473L53.4041 3.04879C53.6477 4.30443 54.3539 5.41132 55.3768 6.14075L56.7076 7.08982C57.1444 7.40129 57.0016 8.10044 56.4776 8.21563L54.8297 8.57795C53.6335 8.84097 52.5722 9.55235 51.8551 10.5719Z"
                fill="#DC734C"
              />
              <path
                d="M56.3397 18.6956L55.5887 19.076C55.3 19.2223 54.9837 18.961 55.0728 18.6499L55.3046 17.8405C55.511 17.1202 55.4432 16.3553 55.1148 15.6964L54.6624 14.7888C54.5186 14.5002 54.7918 14.1695 55.1023 14.2563L56.0485 14.5207C56.7758 14.724 57.5601 14.6366 58.2395 14.2767L59.0262 13.86C59.3181 13.7053 59.643 13.9737 59.5462 14.2896L59.2855 15.1408C59.0603 15.8759 59.1226 16.6626 59.4594 17.3384L59.8977 18.2177C60.0415 18.5063 59.7684 18.837 59.4578 18.7502L58.4811 18.4773C57.7721 18.2791 57.0081 18.357 56.3397 18.6956Z"
                fill="#DC734C"
              />
            </svg>
          </span>
          <div>
            <h4 className="font-bold text-xl">Personalised templates</h4>
            <p className="text-brand-gray-700 text-lg lg:text-xl mt-1">
              Coming soon
            </p>
          </div>
        </Link>
        <div className="col-span-2 rounded-4xl bg-[#FBF0EB] px-10 py-7 lg:px-14">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1">
              <div className="relative w-[3.75rem] h-[3.75rem] rounded-full overflow-hidden bg-brand-bg-avatar">
                <Image
                  width={60}
                  height={60}
                  src="/assets/images/coach-1.png"
                  alt="Coach Image"
                  className="absolute bottom-0"
                />
              </div>
              <div className="relative w-[3.75rem] h-[3.75rem] rounded-full overflow-hidden bg-brand-bg-avatar">
                <Image
                  width={60}
                  height={60}
                  src="/assets/images/coach-2.png"
                  alt="Coach Image"
                  className="absolute bottom-0"
                />
              </div>
              <div className="relative w-[3.75rem] h-[3.75rem] rounded-full overflow-hidden bg-brand-bg-avatar">
                <Image
                  width={60}
                  height={60}
                  src="/assets/images/coach-3.png"
                  alt="Coach Image"
                  className="absolute bottom-0"
                />
              </div>
            </div>
            <h2 className="font-sf-pro-display font-bold text-2xl lg:text-3xl leading-8 tracking-wide mt-3">
              Let's tackle your NDIS plan together!
            </h2>
            <p className="text-black/60 text-lg: lg:text-xl leading-6 tracking-tight whitespace-pre-line mt-2.5 lg:mt-3.5 md:px-2">
              Got questions or concerns? <br /> Chat with a Kindship Coach
              today!
            </p>
            <ButtonWithIcon>
              <span>Open support</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3672 9.75205C13.3672 10.3719 12.8832 10.8474 12.3143 10.8474C11.7454 10.8474 11.2868 10.3634 11.2868 9.76903V6.56785L11.4227 3.40913L10.0641 4.92906L2.21827 12.7664C1.989 12.9957 1.72578 13.1146 1.44557 13.1146C0.876658 13.1146 0.367188 12.5881 0.367188 12.0362C0.367188 11.7645 0.494555 11.4842 0.715326 11.2635L8.55269 3.41763L10.0726 2.06753L6.78652 2.1864H3.70422C3.11833 2.1864 2.63433 1.72788 2.63433 1.16746C2.63433 0.598553 3.09286 0.123047 3.7212 0.123047H12.2464C12.9172 0.123047 13.3587 0.57308 13.3587 1.23539L13.3672 9.75205Z"
                  fill="white"
                />
              </svg>
            </ButtonWithIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
