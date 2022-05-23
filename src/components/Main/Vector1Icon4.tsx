import { memo, SVGProps } from 'react';

const Vector1Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 2 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1.00001 127.5L1.00002 0' stroke='#363636' strokeWidth={2} />
  </svg>
);

const Memo = memo(Vector1Icon4);
export { Memo as Vector1Icon4 };
