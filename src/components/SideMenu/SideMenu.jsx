import { Icon, IconMedium } from "../../utils/icons/IconComponent";
import "../../components/SideMenu/sidemenu.css";
import { sideMenuData } from "../../constData/data";
import SideMenuOption from "./SideMenuOption";
import user from "../../constData/user.png";
import { useState } from "react";
const SideMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrap">
      <div className="sideMenu">
        <div className="iconLogo">
          <Icon type="logo" />
        </div>
        {sideMenuData.map((option) => (
          <SideMenuOption option={option} key={option.id} />
        ))}
        <div className="sideMenuFooter">
          <img src={user} alt="" border="0" className="picture" />
          <div className="textFooter">
            <p>Evano</p>
            <span>Project Manager</span>
          </div>
        </div>
      </div>
      <div className="mobileVersion">
        <div className="nav" onClick={() => setOpen(!open)}>
          <IconMedium type="lines" />
        </div>
        {open ? (
          <div className="mobileSeidebar">
            {sideMenuData.map((option) => (
              <SideMenuOption option={option} key={option.id} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default SideMenu;
