import { memo, SVGProps } from 'react';

const Vector2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 128 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M127.5 1L0 0.999987' stroke='#363636' strokeWidth={2} />
  </svg>
);

const Memo = memo(Vector2Icon);
export { Memo as Vector2Icon };
