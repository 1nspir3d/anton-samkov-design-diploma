import { memo, SVGProps } from 'react';

const Ellipse8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={7.5} cy={7.5} r={7.5} transform='rotate(-90 7.5 7.5)' fill='#363636' />
  </svg>
);

const Memo = memo(Ellipse8Icon);
export { Memo as Ellipse8Icon };
