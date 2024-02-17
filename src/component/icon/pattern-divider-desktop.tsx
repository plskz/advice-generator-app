export function PatternDividerDesktop({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='444'
      height='16'
    >
      <g fill='none' fillRule='evenodd'>
        <path fill='#4F5D74' d='M0 8h196v1H0zm248 0h196v1H248z'></path>
        <g fill='#CEE3E9' transform='translate(212)'>
          <rect width='6' height='16' rx='3'></rect>
          <rect width='6' height='16' x='14' rx='3'></rect>
        </g>
      </g>
    </svg>
  )
}
