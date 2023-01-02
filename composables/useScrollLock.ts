export function useScrollLock(needToSetScrollbar: boolean = true) {
  const lockPage = () => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.classList.add("scroll-lock");
    document.documentElement.classList.add("scroll-visible");

    if (needToSetScrollbar) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
  };

  const unlockPage = () => {
    document.body.classList.remove("scroll-lock");
    document.documentElement.classList.remove("scroll-visible");
    if (needToSetScrollbar) {
      document.body.style.removeProperty("padding-right");
    }
  };

  return {
    lockPage,
    unlockPage,
  };
}
