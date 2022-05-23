import { memo, SVGProps } from 'react';

const Vector3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 128 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 1L127.5 1.00002' stroke='#363636' strokeWidth={2} />
  </svg>
);

const Memo = memo(Vector3Icon);
export { Memo as Vector3Icon };
