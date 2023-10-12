function NotFound({ isNotFound }) {
  const error404Style = {
    display: isNotFound ? "block" : "none",
  };

  return (
    <div
      className={`not-found ${isNotFound && "fadeIn"}`}
      style={error404Style}
    >
      <img src="images/404.png" />
      <p>Oops! Invalid location :/</p>
    </div>
  );
}

export default NotFound;
