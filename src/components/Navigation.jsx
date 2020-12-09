import React from "react";
import { Link } from "react-router-dom";

// import Dashboard from "../images/dashboard.svg";
// import Activity from "../images/activity.svg";
// import Groups from "../images/groups.svg";
// import Friends from "../images/friends.svg";
// import Settings from "../images/settings.svg";

// import {} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinks = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: `${faHome}`,
  },
  {
    title: "Friends",
    path: "/friends",
    // icon: `${Friends}`,
  },
  {
    title: "Groups",
    path: "/groups",
    // icon: `${Groups}`,
  },
  {
    title: "Activity",
    path: "/activity",
    // icon: `${Activity}`,
  },
  {
    title: "Settings",
    path: "/settings",
    // icon: `${Settings}`,
  },
];

const Navigation = () => {
  return (
    <div className="nav-wrapper">
      <ul className="test">
        {navLinks.map((navs, i) => (
          <Link to={navs.path} key={i}>
            {" "}
            <li>
              <FontAwesomeIcon icon={navs.icon} />
              {navs.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
