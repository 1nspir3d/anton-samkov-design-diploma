import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 29 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9.34375 20.625C9.34375 20.3515 9.4524 20.0892 9.6458 19.8958C9.83919 19.7024 10.1015 19.5938 10.375 19.5938H18.625C18.8985 19.5938 19.1608 19.7024 19.3542 19.8958C19.5476 20.0892 19.6562 20.3515 19.6562 20.625C19.6562 20.8985 19.5476 21.1608 19.3542 21.3542C19.1608 21.5476 18.8985 21.6562 18.625 21.6562H10.375C10.1015 21.6562 9.83919 21.5476 9.6458 21.3542C9.4524 21.1608 9.34375 20.8985 9.34375 20.625Z'
      fill='#B41F56'
    />
    <path
      d='M14.5 2.0625C15.8675 2.0625 17.179 2.60575 18.146 3.57273C19.113 4.53972 19.6562 5.85123 19.6562 7.21875V8.25H9.34375V7.21875C9.34375 5.85123 9.887 4.53972 10.854 3.57273C11.821 2.60575 13.1325 2.0625 14.5 2.0625V2.0625ZM21.7188 8.25V7.21875C21.7188 5.30422 20.9582 3.4681 19.6044 2.11432C18.2506 0.760545 16.4145 0 14.5 0C12.5855 0 10.7494 0.760545 9.39557 2.11432C8.0418 3.4681 7.28125 5.30422 7.28125 7.21875V8.25H0.0625V28.875C0.0625 29.969 0.497097 31.0182 1.27068 31.7918C2.04427 32.5654 3.09348 33 4.1875 33H24.8125C25.9065 33 26.9557 32.5654 27.7293 31.7918C28.5029 31.0182 28.9375 29.969 28.9375 28.875V8.25H21.7188ZM2.125 10.3125H26.875V28.875C26.875 29.422 26.6577 29.9466 26.2709 30.3334C25.8841 30.7202 25.3595 30.9375 24.8125 30.9375H4.1875C3.64049 30.9375 3.11589 30.7202 2.72909 30.3334C2.3423 29.9466 2.125 29.422 2.125 28.875V10.3125Z'
      fill='#B41F56'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };