export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-section-img">
        <img src="/img/about.jpg" alt="About me" />
      </div>
      <div className="hs-content-box">
        <div className="about-section-content">
          <div className="ts-section-heading">
          <p className="sub-title">O MNĚ</p>
          <h2 className="ts-section-heading">Kdo jsem</h2>
          </div>
          <p className="about-description">
          Jmenuji se Martin Petřina a momentálně žiji v Praze. Programování se věnuji přibližně 2 roky, z toho jsem necelý rok zaměstnán jako Junior Frontend Developer.<br/>
          Na poli frontendu mám zkušenosti s HTML/CSS, Javascript-jquery, Sass, Nette a React.<br/>
          Ve volném čase se také zajímám o další obory v oblasti webu, které následně mohu využít ve své práci, jako je například grafický design.<br />
          Kromě toho se rád věnuji sportu nebo turistice, ideálně někde v horách s batohem.
          </p>
        </div>
      </div>
    </section>
  )
}