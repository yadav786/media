import React from 'react';
import FallbackExePic from 'Svgs/placeholder.svg';

const lazyLoad = async importImage => {
  const { default: component } = await importImage();
  return component;
};

const HlLogo = lazyLoad(() => import('Svgs/media.png'));

const HomeIcon = (fill = false) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18.359"
    height="17.774"
    viewBox="0 0 18.359 17.774"
  >
    <g data-name="Group 1470">
      <g data-name="Group 1469">
        <path
          d="M18.125 8.662a.882.882 0 0 0-.069-1.262L9.839.238a1.013 1.013 0 0 0-1.331.023L.291 7.79a.881.881 0 0 0-.046 1.262l.207.207a.9.9 0 0 0 1.239.092l.62-.551v8.079a.882.882 0 0 0 .9.9h3.213a.882.882 0 0 0 .9-.9v-5.646h4.086v5.646a.845.845 0 0 0 .849.9h3.4a.882.882 0 0 0 .9-.9V8.915s.161.138.39.344c.207.184.643.046.987-.321z"
          data-name="Path 6411"
          transform="translate(-9.935 -11.562) translate(9.935 11.562)"
          style={
            fill
              ? {
                  opacity: 1,
                }
              : { opacity: 0.5 }
          }
        />
      </g>
    </g>
  </svg>
);

const BackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28.267"
    height="23.125"
    viewBox="0 0 28.267 23.125"
  >
    <g id="prefix__noun_back_2342824" transform="translate(-10.5 -13.36)">
      <path
        id="prefix__Path_1"
        d="M38.767 24.922a1.5 1.5 0 0 0-1.5-1.5H15.621l7.5-7.5A1.5 1.5 0 1 0 21 13.8L10.941 23.859a1.514 1.514 0 0 0-.328.493c0 .007 0 .015-.007.022a1.489 1.489 0 0 0-.106.548 1.514 1.514 0 0 0 .106.548c0 .007 0 .015.007.022a1.514 1.514 0 0 0 .328.493L21 36.046a1.5 1.5 0 0 0 2.122-2.121l-7.5-7.5h21.646a1.5 1.5 0 0 0 1.499-1.503z"
        data-name="Path 1"
        fill="currentColor"
      />
    </g>
  </svg>
);

export { HlLogo, HomeIcon, BackIcon, FallbackExePic };
