import { memo, SVGProps } from 'react';

const Ellipse2Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 16 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={8} cy={7.5} r={7.5} transform='rotate(90 8 7.5)' fill='#363636' />
  </svg>
);

const Memo = memo(Ellipse2Icon2);
export { Memo as Ellipse2Icon2 };