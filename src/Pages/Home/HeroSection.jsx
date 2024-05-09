import data from "../../data/index.json"

export default function heroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hs-content-box">
        <div className="hs-content">
          <h1 className="hs-title">
            <span className="hs-title-color">Frontend</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hs-description">
            Jmenuji se Martin, je mi 24 let a jsem zapálený Frontend Developer žijící v Praze
          </p>
          <div className="hs-contact-icons">
            {data?.socials?.map((item,index) => (
              <div key={index} className="hs-contact-icons">
                <a href={item.href}><i className={item.class}></i></a>
              </div>
            ))}
          </div>
          <div className="ts-section">
          <h3 className="ts-section-heading ts-mg">
            Tech stack
          </h3>
       <div className="ts-section-container">
        {data?.techStack?.map((item, index) => (
          <div key={index} className="ts-section-box">
            <div className="ts-section-img">
                <img src={item.src} alt="Programming language" />
            </div>
          </div>
        ))}
      </div>
       </div>
          </div>
      </div>
      <div className="hs-img">
        <div className="content">
            <img src="./img/mar4.jpg" alt="portrait" className="portrait"/>
            <h2>Martin Petřina<br/><span>Frontend developer</span></h2>
            <a className="cv-btn" href="/docs/Martin Petřina CV.pdf" download>Stáhnout CV</a>
        </div>
    </div>
    </section>
  )
}