export default function Contact() {
  return (
    <section id="Contact" className="contact-section">
      <div className="contact-section-heading">
        <p className="sub-title">Kontakt</p>
        <h2 className="ts-section-heading">Neváhejte mě kontaktovat!</h2>
      </div>
        <div className="ct-section-container">
            <div className="ct-section-email">
              <div className="ct-icon"><i className="fas fa-envelope-open-text"></i></div>
                    <h4 className="ct-email">E-Mail</h4>
            </div>      
            <p className="ct-text">martin.petrina199@gmail.com</p>
            <div className="ct-section-phone">
              <div className="ct-icon"><i className="fas fa-mobile-alt"></i></div>
                  <h4>Telefon</h4>
            </div>        
            <p className="ct-text">+420 723 995 573</p>
        </div>
    </section>
  );
}