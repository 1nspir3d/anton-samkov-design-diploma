import { memo, SVGProps } from 'react';

const RiAncientPavilionLineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17.2053 2.75146C18.1763 5.49476 20.0826 7.80836 22.5895 9.28611C25.0964 10.7639 28.0437 11.3113 30.9141 10.8323C30.8038 12.1405 30.2804 13.3798 29.4195 14.3709C28.5586 15.3621 27.4049 16.0538 26.125 16.3461V26.1251L28.875 26.1265V28.8765H4.12497V26.1265H6.87497V16.3461C5.59503 16.0537 4.44118 15.3619 3.58008 14.3708C2.71899 13.3797 2.19523 12.1406 2.08447 10.8323C4.95508 11.3121 7.90295 10.7652 10.4104 9.28764C12.9179 7.8101 14.8247 5.49641 15.796 2.75284H17.2053V2.75146ZM23.375 16.5001H9.62497V26.1251H23.375V16.5001ZM16.5 7.32472L16.3487 7.53784C14.1824 10.5058 11.0108 12.5847 7.42497 13.3871L6.93272 13.4875L7.8581 13.7487H25.146L26.0645 13.4875L26.0493 13.4847C22.2749 12.7666 18.9147 10.6402 16.6498 7.53646L16.5 7.32334V7.32472Z'
      fill='#B41F56'
    />
  </svg>
);

const Memo = memo(RiAncientPavilionLineIcon);
export { Memo as RiAncientPavilionLineIcon };