import { Link } from 'react-router-dom';
import '../assets/css/AppNavbar.css';

const AdminNavbar = () => {
  return (
    <div className="navbarq">
     <div className="logoq">
        <a href='/'>
        <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708706036/Black_White_Modern_Monogram_Handwritten_Real_Estate_Logo_kzep9i.png" height={50} width={50} style={{borderRadius:"30px"}} alt="Logo" /></a>
      </div>

      <div className="menuq">
        <Link to="/home">Home</Link>
        <Link to="/AdminCard">Cakes</Link>
        <Link to="/adminvenue">venues</Link>
        <Link to="/adminenter">Entertainment</Link>
        <Link to="/adminphoto">Photography</Link>
        <Link to="/foods">Foods</Link>
        {/* <Link to="/decor">Decorations</Link>
        <Link to="/return">Return Gifts</Link> */}
      </div>
      <div className="profileq">
        <Link to="/profile">
          <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708713998/person_ygv9ho.jpg" alt="Profile Icon" />
        </Link>
        <span></span>
      </div>
    </div>
  );
};

export default AdminNavbar;























