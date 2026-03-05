const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <a href="/inicio">Home</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>{" "}
        <li>
          <a href="/">Gallery</a>
        </li>{" "}
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
