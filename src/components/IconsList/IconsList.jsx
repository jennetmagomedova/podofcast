import classNames from "classnames";
import "./IconsList.scss";

const IconsList = (props) => {
  const { items, className } = props;
  return (
    <ul className={classNames("icons__list", className)}>
      {items.map((item) => (
        <li className="icons__list-item" key={`item-${item.iconName}`}>
          <a href={item.href} className="items__list-link">
            <img src={`/icons/${item.iconName}.svg`} alt="" height={24} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default IconsList;
