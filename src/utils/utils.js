export const scrollToExactElementPositionById = (id) => {
  const element = document.getElementById(`tabItem${id}`);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
