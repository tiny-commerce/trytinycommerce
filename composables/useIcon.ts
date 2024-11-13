export enum IconList {
  Calendar = "calendar",
  Cart = "shopping-cart",
  Chart = "chart-bar",
  Check = "check",
  Instagram = "instagram",
  Orders = "receipt",
  Website = "desktop",
}

export default function useIcon() {
  const iconPrefix = "pi pi-";

  function getIcon(icon: IconList) {
    return `${iconPrefix}${icon}`;
  }

  return {
    iconPrefix,
    IconList,
    getIcon,
  };
}
