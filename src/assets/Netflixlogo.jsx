import * as React from 'react';
const SVGComponent = (props) => (
  <svg
    className="value-prop-logo"
    focusable="false"
    viewBox="8.152 0 20 36.232"
    aria-hidden="true"
    data-uia="n-logo"
    width={20}
    height={36.232}
    {...props}
  >
    <defs>
      <radialGradient
        id="5874c447-6b4c-43ea-8618-024b663de248-a"
        r="75%"
        gradientTransform="matrix(.38 0 .5785 1 .02 0)"
      >
        <stop offset="60%" stopOpacity={0.3} />
        <stop offset="90%" stopOpacity={0.05} />
        <stop offset="100%" stopOpacity={0} />
      </radialGradient>
    </defs>
    <path
      d="M8.152 0v36.232c2.174 -0.29 5 -0.508 7.174 -0.616V0H8.152"
      fill="#b1060e"
    />
    <path
      d="M20.978 0v35.616c2.572 0.108 4.746 0.326 7.174 0.616V0H20.978"
      fill="#b1060e"
    />
    <path
      d="M8.152 0v7.246l7.174 21.738V20.182l5.472 15.434c2.754 0.108 4.928 0.326 7.356 0.616V28.986L20.978 7.246v8.696L15.326 0H8.152"
      fill="url(#5874c447-6b4c-43ea-8618-024b663de248-a)"
    />
    <path
      d="M8.152 0l12.644 35.616c2.754 0.108 4.928 0.326 7.356 0.616L15.326 0H8.152"
      fill="#e50914"
    />
  </svg>
);
export default SVGComponent;
