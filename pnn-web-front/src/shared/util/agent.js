export const agent = () => {
  const checkUserAgent = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isMobile = /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    return isMobile;
  };
  return {
    checkUserAgent,
  };
};
