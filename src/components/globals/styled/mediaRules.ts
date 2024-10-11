export const Sizes = Object.freeze({
  mobileDown: 374.98,
  mobile: 375,
  tabletDown: 767.98,
  tablet: 768,
  desktopDown: 1151.98,
  desktop: 1152,
});

export const devices = {
  mobileDown: `@media (max-width: ${Sizes.mobileDown}px)`,
  mobile: `@media (min-width: ${Sizes.mobile}px)`,
  tabletDown: `@media (max-width: ${Sizes.tabletDown}px)`,
  tablet: `@media (min-width: ${Sizes.tablet}px)`,
  desktopDown: `@media (max-width: ${Sizes.desktopDown}px)`,
  desktop: `@media (min-width: ${Sizes.desktop}px)`,
};
