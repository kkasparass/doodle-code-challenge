export const scrollToBottom = (element: HTMLElement | null) => {
  if (!element) return;
  if ("scrollBehavior" in document.documentElement.style) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: "smooth",
    });
    return;
  }

  element.scrollTop = element.scrollHeight;
};
