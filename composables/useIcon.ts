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

  return {
    iconPrefix,
    IconList,
  };
}
