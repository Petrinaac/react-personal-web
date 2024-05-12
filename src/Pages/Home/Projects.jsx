import data from "../../data/index.json";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">  
      <div className="projects-section-heading">
          <p className="sub-title">PORTFOLIO</p>
          <h2 className="ts-section-heading">Mé Projekty</h2>
      </div>
      <div className="projects-section-container">
        {data?.projects?.map((item,index) => (
          <div key={index} className="projects-section-box">
            <div className="projects-section-img">
              <img src={item.src} href={item.link} alt="Project" />
            </div>
            <div className="projects-section-box-content">
              <div className="title-projects">
              <h3 className="projects-section-title">
                  {item.title}
                </h3>
                <div className="used-stack">
                  <img src={item.one} alt="techone" width="32px" />
                  <img src={item.two} alt="techtwo" width="32px" />
                  <img src={item.three} alt="techthree" width="32px" />
                </div>
              </div>
                <p className="projects-description">{item.description}</p>
                <a href={item.link} className="github projects-link">Github code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}