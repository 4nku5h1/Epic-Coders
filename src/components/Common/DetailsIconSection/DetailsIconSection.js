import AnimatedItems from "../Motion/AnimatedItems";
import "./styles.scss";

export default function DetailsIconSection({
  uid,
  containerClass,
  heading,
  paragraph,
  items,
  itemClass,
}) {
  const Item = (item) => {
    return (
      <div className="item-inner">
        <img className="item-logo" src={item.icon} />
        {item?.title && (
          <span className="small-capital-heading">{item.title}</span>
        )}
      </div>
    );
  };
  return (
    <div className={`details-icon-section ${containerClass}`} id={uid}>
      {heading && <h2 className="heading">{heading}</h2>}
      {paragraph && <p className="paragraph">{paragraph}</p>}
      {items?.length && (
        <AnimatedItems
          className={`items ${itemClass}`}
          animate={true}
          data={items}
          child={Item}
        />
      )}
    </div>
  );
}
