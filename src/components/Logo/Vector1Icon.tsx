import { memo, SVGProps } from 'react';

const Vector1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 2 128' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M1 0V127.5' stroke='#363636' strokeWidth={2} />
  </svg>
);

const Memo = memo(Vector1Icon);
export { Memo as Vector1Icon };
