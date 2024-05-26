import "./styles.scss";

export default function Logo({
  size = 24,
  showSubtitle = true,
  subtitleAlign = "right",
}) {
  return (
    <div className="logo" style={{ fontSize: `${size}px` }}>
      <h2>
        EPIC<span>CODERS</span>
      </h2>
      {showSubtitle ? (
        <h3 style={{ textAlign: subtitleAlign }}>
          A design and development studio
        </h3>
      ) : null}
    </div>
  );
}
