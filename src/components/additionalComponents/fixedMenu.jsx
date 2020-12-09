import React from "react";
import { Link } from "react-router-dom";

import {
  faCogs,
  faUserFriends,
  faUserCog,
  faSitemap,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const fixedMenu = () => {
  return (
    <div className="fixed-menu-wrapper">
      <ul className="fixed-menu-list">
        <Link to="/dashboard">
          <li>
            <span>
              <FontAwesomeIcon icon={faGripHorizontal} />
            </span>
            Dashboard
          </li>
        </Link>
        <Link to="/friends">
          <li>
            <span>
              <FontAwesomeIcon icon={faUserFriends} />
            </span>
            Friends
          </li>
        </Link>
        <Link to="/groups">
          <li>
            <span>
              <FontAwesomeIcon icon={faUserCog} />
            </span>
            Groups
          </li>
        </Link>
        <Link to="/activity">
          <li>
            <span>
              <FontAwesomeIcon icon={faSitemap} />
            </span>
            Activity
          </li>
        </Link>
        <Link to="/settings">
          <li>
            <span>
              <FontAwesomeIcon icon={faCogs} />
            </span>
            Settings
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default fixedMenu;
