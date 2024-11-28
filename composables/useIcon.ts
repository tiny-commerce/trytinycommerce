export enum IconList {
  ArrowLongRight = "arrow-right",
  Calendar = "calendar",
  Cart = "shopping-cart",
  Chart = "chart-bar",
  Check = "check",
  Instagram = "instagram",
  Orders = "receipt",
  Website = "desktop",
  X = "times",
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
