import AnimatedItems from "../Motion/AnimatedItems";
import "./styles.scss";

export default function DetailsSection({
  uid,
  heading,
  paragraph,
  items,
  itemClass,
  containerClass,
}) {
  const Item = (item) => {
    return (
      <div className="item-inner">
        <div className="bullet" />
        <span className="small-capital-heading">{item}</span>
      </div>
    );
  };
  return (
    <div className={`details-section ${containerClass}`} id={uid}>
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
