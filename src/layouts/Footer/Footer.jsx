import Logo from "@/components/Logo";
import "./Footer.scss";
import footerLinks from "@/constants/footerLinks";

import classNames from "classnames";
import IconsList from "@/components/IconsList";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__body">
        <div className="footer__info">
          <div className="footer__name">
            <Logo />
            <span className="footer__year">
              ©<time dateTime="2021">2021</time>.
            </span>
          </div>
          <div className="footer__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="footer__soc1als">
            <IconsList
              className="footer__soc1als-list"
              items={
                footerLinks.find((links) => links.title == "socialLinks").items
              }
            />
          </div>
        </div>
        <nav className="footer__menu">
          <ul className="footer__menu-list ">
            {footerLinks
              .find((links) => links.title == "menuItems1")
              .items.map((link) => (
                <li className="footer__menu-item" key={`item-${link.label}`}>
                  <a
                    className={classNames("footer__menu-link", {
                      ["text--accent"]: link.isAccent,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
          <ul className="footer__menu-list">
            {footerLinks
              .find((links) => links.title == "menuItems2")
              .items.map((link) => (
                <li className="footer__menu-item" key={`item-${link.label}`}>
                  <a
                    className={classNames("footer__menu-link", {
                      ["text--accent"]: link.isAccent,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <div className="footer__column">
          <div className="footer__block">
            <p className="footer__block-title">
              Listen to episodes on your fav platform:
            </p>
            <div className="footer__block-icons">
              <IconsList
                className="footer__block-platforms"
                items={
                  footerLinks.find((links) => links.title == "platformLinks")
                    .items
                }
              />
            </div>
          </div>
          <div className="footer__block">
            <p className="footer__block-title">App available on:</p>
            <div className="footer__block-icons">
              <IconsList
                className="footer__block-stores"
                items={
                  footerLinks.find((links) => links.title == "storeLinks").items
                }
              />
            </div>
          </div>
          <div className="footer__block"></div>
        </div>
      </div>
      <div className="footer__extra">
        <p className="footer__copyright">
          ©{new Date().getFullYear()}. All Rights Reserved.{" "}
          <span className="text--accent">Pod of Cast</span>
        </p>
        <div className="footer__extra-links">
          {footerLinks
            .find((links) => links.title == "extraLinks")
            .items.map((link) => (
              <a
                className="footer__extra-link"
                href={link.href}
                key={`extraLink-${link.label}`}
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
