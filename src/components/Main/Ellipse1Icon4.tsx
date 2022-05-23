import { memo, SVGProps } from 'react';

const Ellipse1Icon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 15 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7.5} cy={8} r={7.5} transform='rotate(-180 7.5 8)' fill='#363636' />
  </svg>
);

const Memo = memo(Ellipse1Icon4);
export { Memo as Ellipse1Icon4 };
