import './styles.css';
const defaultImage =
  'https://mundooffice.net/wp-content/uploads/2019/05/conheca-cursos-de-programacao-gratis-1132x600-600x600.jpg';

const NavCard = (props) => {
  return (
    <div className="nav-card">
      <img
        className="nav-card-image"
        src={props.imageUrl || defaultImage}
        alt="Squad Logo"
      />
      <div className="nav-card-info">
        <span className="nav-card-info__title">#{props.title}</span>
        <span className="nav-card-info__subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
};

export default NavCard;
