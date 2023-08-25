import "./style.scss"
import foto from "../Assets/imagem.svg.png"
import github from "../Assets/github.svg.png"
import linkedin from "../Assets/linkedin.svg.png"
import expenseChart from "../Assets/expenseChart.svg.png"
import todoList from "../Assets/todoList.svg.png"
import weatherApp from "../Assets/weatherApp.svg.png"
import movies from "../Assets/movies.svg.png"
import Swal from "sweetalert2"
import { useRef } from "react"

export const Home = () => {
  const nomeRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const mensagemRef: any = useRef(null);
  const telefoneRef: any = useRef(null);

  const scrollForm = () => {
    const form: any = document.getElementById("meuForm");
    form.scrollIntoView({ behavior: "smooth" })
  }

  const sendMessage = async () => {
    const nome = nomeRef.current.value;
    const email = emailRef.current.value;
    const mensagem = mensagemRef.current.value;
    const telefone = telefoneRef.current.value;

    if (!nome || !email || !telefone || !mensagem) {
      // Verificar se todos os campos estão preenchidos antes de continuar
      Swal.fire(
        'Por favor, preencha todos os campos do formulário!',
        '',
        'error'
      );
      return;
    }
    const data = {
      nome,
      email,
      telefone,
      mensagem
    };

    try {
      const response = await fetch('https://api.sheetmonkey.io/form/m3aA2Lb3NnSLS9toTDzdoi', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        Swal.fire(
          'Mensagem enviada com sucesso!',
          '',
          'success'
        );
        // Limpar os campos após o envio bem-sucedido
        nomeRef.current.value = "";
        emailRef.current.value = "";
        telefoneRef.current.value = "";
        mensagemRef.current.value = "";

      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      Swal.fire(
        'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.',
        '',
        'error'
      );
    }
  }

  return (
    <main className="container">
      <section className="apresentation">
        <div className="text">
          <div className="title">
            <p>Muito prazer em conhecê-lo!</p>
            <p>Sou o <u>Marcos Fernandes.</u></p>
          </div>
          <div className="headline">
            <p>Sou desenvolvedor front end, com sólidos conhecimentos em  JavaScript, React, HTML, CSS, SASS e APis. 
              Atualmente atuo como freelancer desenvolvendo interfaces para sites e aplicativos, com habilidade em implementar soluções modernas 
              e atraentes oferecendo assim a melhor experiência possível para o usuário.</p>
            <button className="btn" onClick={scrollForm}>CONTATE-ME</button>
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
        <div className="titleContact">
          <span className="titleProjects">Projetos</span>
          <button className="btn" onClick={scrollForm}>CONTATE-ME</button>
        </div>

        <div className="sectionProjects">
          <span className="project">
            <a href="http://">
              <img src={todoList} alt="TodoList" />
            </a>
            <p className="nameProjects">TODO WEB APP</p>
            <p className="technologies">HTML CSS JAVASCRIPT</p>
          </span>

          <span className="project">
            <a href="http://">
              <img src={expenseChart} alt="ExpenseChart" />
            </a>
            <p className="nameProjects">EXPENSES CHART COMPONENT</p>
            <p className="technologies">HTML CSS JAVASCRIPT</p>
          </span>

          <span className="project">
            <a href="http://">
              <img src={weatherApp} alt="WeatherApp" />
            </a>
            <p className="nameProjects">WEATHER APP</p>
            <p className="technologies">HTML CSS JAVASCRIPT API</p>
          </span>

          <span className="project">
            <a href="http://">
              <img src={movies} alt="Movies" />
            </a>
            <p className="nameProjects">Movies Streaming</p>
            <p className="technologies">HTML CSS JAVASCRIPT API</p>
          </span>
        </div>
      </section>

      <section className="contact">
        <div className="sectionContact">Contato <p>Eu adoraria ouvir sobre seu projeto e como eu poderia ajudar.
          Por favor preencha o formulário, e eu entro em contato o mais breve possível. Até logo!</p>
        </div>
        <div className="sectionForm">
          <form id="meuForm" className="form" action="Submit">
            <textarea ref={nomeRef} id="nome" placeholder="Nome" />
            <textarea ref={emailRef} id="email" placeholder="Email" />
            <textarea ref={telefoneRef} id="telefone" placeholder="Telefone" />
            <textarea ref={mensagemRef} id="msg" className="msg" placeholder="Mensagem" />
          </form>
          <button className="submitBtn" type="submit" onClick={sendMessage}>ENVIAR MENSAGEM</button>
        </div>
        <div className="socialMedia">
          <span className="icon"><a href="https://github.com/MarcosFernandes99"><img src={github} alt="Github" /></a></span>
          <span className="icon"><a href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/"><img src={linkedin} alt="Linkedin" /></a></span>
        </div>
      </section>
    </main>
  )
}
