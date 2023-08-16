import "./style.scss"
import foto from "../assets/imagem.svg.png"
import github from "../assets/github (1).png"
import linkedin from "../assets/linkedin.svg.png"

export const Home = () => {
  return (
    <main className="container">

      <section className="apresentation">
        <div className="text">
          <div className="title">
            <p>Muito prazer em conhecê-lo!</p>
            <p>Sou o Marcos Fernandes.</p>
          </div>
          <div className="headline">
            <p>Desenvolvedor front end, apaixonado por criar sites e apps.</p>
            <button>CONTATE-ME</button>
          </div>
        </div>
        <div className="photo">
          <img className="myPhoto" src={foto} alt="Photo" />
          <div className="socialIcons">
            <a className="iconLinkG" href="https://www.globo.com/">
              <img className="icon" src={github} alt="icon" />
            </a>
            <a className="iconLinkL" href="https://ge.globo.com/?utm_source=globo.com&utm_medium=header">
              <img className="icon" src={linkedin} alt="icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="specialties">
        <div className="sectionSpecialties">
          <span className="specialtie">HTML <p>1 ano de experiência</p></span>
          <span className="specialtie">Javascript <p>1 ano de experiência</p></span>
          <span className="specialtie">CSS <p>1 ano de experiência</p></span>
          <span className="specialtie">React <p>1 ano de experiência</p></span>
          <span className="specialtie">Sass <p>1 ano de experiência</p></span>
          <span className="specialtie">API <p>1 ano de experiência</p></span>
        </div>
      </section>

      <section className="projects">

      </section>

      <section className="contact">

      </section>
    </main>
  )
}
