export enum IconList {
  Check = "check",
  Menu = "bars",
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
