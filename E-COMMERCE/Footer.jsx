
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708706036/Black_White_Modern_Monogram_Handwritten_Real_Estate_Logo_kzep9i.png" alt="Event Organizer Logo" />
        </div>
        <div className="footer-info" style={{color:"#543f3f",fontFamily:"cursive"}}>
          <p>JOYFUL JAMBOREES Birthday Event Organizer</p>
          <p>Contact: joyfuljamborees@birthdaybash.com</p>
         <p>Phone Number: 904-560-237</p>
        </div>
        <div className="payment-methods">
        <h3 style={{textAlign:"center", color:"#543f3f",fontFamily:"cursive"}}>We Accept</h3>
          <img src="https://res.cloudinary.com/dunzdwo0h/image/upload/v1708709711/We_accept_n1lzkp.png" alt="Visa" style={{marginRight:"45px"}}/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
