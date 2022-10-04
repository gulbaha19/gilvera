import { IconArrow, IconMedium } from "../../utils/icons/IconComponent";
import "./sideMenuOption.css";

const SideMenuOption = ({ option }) => {
  return (
    <div className={option.label === "Customers" ? "selectedOption" : "sideMenuoption"}>
      <p>
        <span>{option.icon}</span>
        {option.label}
      </p>
      {option.label === "Customers" ? <IconArrow type="white" /> : <IconArrow type="rightArrow" />}
    </div>
  );
};
export default SideMenuOption;
