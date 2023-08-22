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
            <p>Sou o <u>Marcos Fernandes.</u></p>
          </div>
          <div className="headline">
            <p>Desenvolvedor front end, apaixonado por criar sites e apps.</p>
            <button>CONTATE-ME</button>
          </div>
        </div>

        <div className="photo">
          <img className="myPhoto" src={foto} alt="Photo" />
          <div className="socialIcons">
            <span> <a className="iconLinkG" href="https://github.com/MarcosFernandes99">
              <img className="icon" src={github} alt="icon" />
            </a></span>

            <span> <a className="iconLinkL" href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/">
              <img className="icon" src={linkedin} alt="icon" />
            </a></span>
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
        <div className="sectionContact">Contato <p>Eu adoraria ouvir sobre seu projeto e como eu poderia ajudar.
          Por favor preencha o formulário, e eu entro em contato o mais breve possível</p>
        </div>
        <div className="sectionForm">
          <form className="form" action="Submit">
            <textarea placeholder="Nome" />
            <textarea placeholder="Email" />
            <textarea className="msg" placeholder="Mensagem" />
            <button className="submitBtn" type="submit">ENVIAR MENSAGEM</button>
          </form>

        </div>
        <div className="socialMedia">
          <span className="icon"><a href="https://github.com/MarcosFernandes99"><img src={github} alt="Github" /></a></span>
          <span className="icon"><a href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/"><img src={linkedin} alt="Linkedin" /></a></span>
        </div>

      </section>
    </main>
  )
}
