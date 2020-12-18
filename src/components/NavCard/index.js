import './styles.css';
const defaultImage =
  'https://www.capitani.com.br/wp-content/uploads/2017/07/java-logo.jpg';

const NavCard = (props) => {
  return (
    <div className="nav-card">
      <img
        className="nav-card-image"
        src={props.imageUrl || defaultImage}
        alt="Squad Logo"
      />
      <div className="nav-card-info">
        <span className="nav-card-info__title">{props.title}</span>
        <span className="nav-card-info__subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
};

export default NavCard;
