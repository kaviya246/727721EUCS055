import { FaShoppingCart, FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import AppNavbar from '../Components/AppNavbar';
import Foodslide from './Foodslide';
import {  useDispatch } from 'react-redux';
import {addToCart } from '../redux/action';


const ProductCard = () => {
  const dispatch=useDispatch();
  const [products] = useState([
    { id: 1, name: 'Indian-BreakFast', amount: 'Per Plate 100', capacity: 'Up to 200 guests',facilities: ['Beach access', 'Indoor seating', 'Parking'],ambiance: 'Scenic and Relaxing',imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755298/inbra_jvucso.jpg' },
    { id: 2, name: 'Indian-Lunch', amount: 'Per Plate 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755303/inlu_mbh5vi.jpg' },
    { id: 3, name: 'Indian-Dinner', amount: 'Per Plate 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755308/indin_onm8pt.jpg' },
    { id: 4, name: 'Chinese-BreakFast', amount: 'Per Plate 150', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755259/chibre_atwo2r.jpg' },
    { id: 5, name: 'Chinese-Lunch', amount: 'Per Plate 150', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755259/chindin_pjqxuy.jpg' },
    { id: 5, name: 'Chinese-Dinner', amount: 'Per Plate 200', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755264/chinlu_c8soqk.jpg' },
    { id: 5, name: 'Non-veg ', amount: 'Per Plate 250 ', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755323/nonveglu_owih2u.jpg' },
    { id: 6, name: 'Non-veg ', amount: 'Per Plate 200', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755313/nonvegbre_ouasqo.jpg' },
    { id: 7, name: 'Non-veg ', amount: 'Per Plate 300 ', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708755317/nonvegdin_qbovgs.jpg' },
    { id: 9, name: 'Desserts', amount: 'Per Plate 100', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708701392/brownies_ttuury.jpg' },
    { id: 10, name: 'Fresh Juice', amount: 'Per Plate 150', imageUrl: 'https://res.cloudinary.com/dunzdwo0h/image/upload/v1708700026/cake6_qxfl78.jpg' },
    
    
  ]);

  const handleAddToCart = (productId) => {
    dispatch(addToCart(products[productId-1]))
  }

  const handleShareWhatsApp = () => {
    window.open(`https://wa.me/?text=Check out this product: ${window.location.href}`);
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/shareArticle?url=${window.location.href}`);
  };

  const handleShareFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`);
  };

  return (
    <div>
      <AppNavbar />
      <Foodslide/>
      <div>
      <h1 style={{textAlign:"center",fontFamily:"Bahnschrift Condensed",fontSize:"larger",marginTop:"40%",color:"#543f3f"}}>Delectable food options to delight your guest is taste buds</h1>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Amount: {product.amount}</p>
            </div>
            <div className="action-icons">
              <FaShoppingCart onClick={() => handleAddToCart(product.id)} className="icon" />
              <FaWhatsapp onClick={() => handleShareWhatsApp(product)} className="icon" />
              <FaLinkedin onClick={() => handleShareLinkedIn(product)} className="icon" />
              <FaFacebook onClick={() => handleShareFacebook(product)} className="icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
