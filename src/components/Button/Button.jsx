import classNames from "classnames";
import "./Button.scss";

const Button = (props) => {
  const {
    className,
    type = "button",
    href,
    target,
    /** transparent, black*/
    mode = "black",
    label,
    extraAttrs,
    /**small, medium, big */
    size = "medium",
    hasShadow,
    /**small, big */
    shadowSize,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? "a" : "button";
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;

  return (
    <Component
      className={classNames(
        className,
        "button",
        `button--color-${mode}`,
        `button--size-${size}`,
        { [`button--shadow-${shadowSize}`]: hasShadow }
      )}
      title={label}
      aria-label={label}
      {...specificProps}
      {...extraAttrs}
    >
      {label}
    </Component>
  );
};

export default Button;
