import { memo, SVGProps } from 'react';

const Vector1Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 128 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M127.5 1L0 0.999994' stroke='#363636' strokeWidth={2} />
  </svg>
);

const Memo = memo(Vector1Icon2);
export { Memo as Vector1Icon2 };
