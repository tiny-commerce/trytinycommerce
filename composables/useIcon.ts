export default function useIcon() {
  const iconPrefix = "pi pi-";

  enum IconList {
    Calendar = "calendar",
    Cart = "shopping-cart",
    Chart = "chart-bar",
    Check = "check",
    Instagram = "instagram",
    Orders = "receipt",
    Website = "desktop",
  }

  function getIcon(icon: IconList) {
    return `${iconPrefix}${icon}`;
  }

  return {
    iconPrefix,
    IconList,
    getIcon,
  };
}
