import Button from "@/components/Button";
import Logo from "../../components/Logo";
import "./Header.scss";

import classNames from "classnames";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Header = () => {
  const menuItems = [
    {
      label: "Podcasts",
      href: "/podcasts",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo />
        <div
          className={classNames("header__overlay", { ["is-active"]: isOpen })}
        >
          <nav className="header__menu">
            <ul className="header__menu-list">
              {menuItems.map((item) => (
                <li className="header__menu-item" key={`menu-${item.label}`}>
                  <a href={item.href} className="header__menu-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__actions">
            <Button
              className="header__button"
              href="/episodes"
              mode="transparent"
              label="RECENT EPISODES"
              size="small"
            />
            <Button
              className="header__button"
              href="/subscribe"
              mode="black"
              label="SUBSCRIBE"
              size="small"
              hasShadow
              shadowSize="small"
            />
          </div>
        </div>
        <div className="header__burger-button visible-mobile">
          <Hamburger
            size={48}
            label="Show menu"
            hideOutline={false}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
