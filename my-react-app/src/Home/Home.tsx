import "./style.scss"
import fotoperfil from "../Assets/fotoperfil.png"
import github from "../Assets/github.svg.png"
import linkedin from "../Assets/linkedin.svg.png"
import insta from "../Assets/instagram.png"
import gmail from "../Assets/gmail.png"
import todoList from "../Assets/todoList.svg.png"
import weatherApp from "../Assets/weatherApp.svg.png"
import telaLogin from "../Assets/telaLogin.png"
import avatar from "../Assets/pngegg.png"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import MenuSelected from "../Components/MenuSelected"
import Loading from "../Components/loading/Loading"
import scrollSection from "../utils/functionScrollSection"
import MyPDF from "../Components/openPdf/MyPdf"

export const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    sendMessage();
  };

  const sendMessage = async () => {

    if (!name || !email || !message) {
      // Verificar se todos os campos estão preenchidos antes de continuar
      Swal.fire(
        'Por favor, preencha todos os campos do formulário!',
        '',
        'error'
      );
      return;
    }
    const data = {
      name,
      email,
      message
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
        setName('')
        setEmail('')
        setMessage('')

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

  useEffect(() => {
    // Simule um atraso de carregamento (você pode substituir isso com a lógica real de carregamento)
    setTimeout(() => {
      setIsLoading(false); // Defina isLoading como false para esconder o componente de carregamento
    }, 2000); // Tempo de simulação de carregamento (2 segundos)
  }, []);

  // Função para verificar se um elemento está na visualização
  function isElementInViewport(element: any) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para adicionar a classe "visible" quando a seção está na visualização
  function handleSectionVisibility(sectionId: any) {
    const section = document.getElementById(sectionId);

    if (section && isElementInViewport(section)) {
      section.classList.add("visible");
    }
  }

  function handleProjectVisibility() {
    const projectElements = document.querySelectorAll(".project");

    projectElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }

  // Adicione um ouvinte de evento de rolagem para chamar handleSectionVisibility quando o usuário rolar a página
  window.addEventListener("scroll", () => {
    handleSectionVisibility("specialties");
    handleProjectVisibility();
    handleSectionVisibility("about");
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <main className="container">
          <section className="nav-bar">
            <div className="hamburguer-menu" id="hamburger-menu">
              <MenuSelected onClick={scrollSection} />
            </div>
            <div className="menu">
              <span onClick={() => scrollSection("projects")}>Projetos</span>
              <span onClick={() => scrollSection("about")}>Sobre</span>
              <span onClick={() => scrollSection("contact")}>Fale comigo</span>
            </div>
          </section>
          <MyPDF/>
          <section className="apresentation">
            <div className="text">
              <div className="title">
                <p>Marcos Fernandes</p>
              </div>
              <div className="headline">
                <p>Sou um Desenvolvedor Front-end e minha especialização está em criar portais, websites e landing pages de alto desempenho.</p>
                <p>Meu objetivo é desenvolver projetos modernos e eficientes. Se você está em busca de um Desenvolvedor Front-end ágil e comprometido
                  em criar soluções personalizadas, você encontrou o profissional certo!
                </p>
              </div>
              <div className="socialIcons">
                <button className="btn" onClick={() => scrollSection("contact")}>CONTATE-ME</button>
              </div>
            </div>
            <div className="photo">
              <img className="myPhoto" src={fotoperfil} alt="Photo" />
            </div>
          </section>

          <section className="about" id="about">
            <h2>Sobre</h2>
            <div className="card">
              <label className="avatar">
                <img className="img-avatar" src={avatar} alt="Avatar" />
              </label>
              <label className="info">
                <span className="info-1"><strong>Desenvolvedor Fron-End</strong></span>
                <span className="info-2"><strong>Idade:</strong> 28 anos</span>
              </label>
              <div className="content-1">
                <span><strong>Data de Nascimento:</strong> 21 de outubro de 1994</span>
                <span><strong>Telefone:</strong> (11) 9 8859-1854</span>
                <span><strong>Cidade:</strong> São Paulo - SP</span>
                <span><strong>Freelancer:</strong> Disponível</span>
              </div>
            </div>
          </section>

          <section className="specialties" id="specialties">
            <div className="section-title">
              <span>Tecnologias que atuo</span>
            </div>
            <div className="sectionSpecialties">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            </div>
          </section>

          <section className="projects" id="projects">
            <div className="titleContact">
              <span className="titleProjects">Projetos</span>
              <button className="btn" onClick={() => scrollSection("contact")}>CONTATE-ME</button>
            </div>

            <div className="sectionProjects">
              <div className="project">
                <a href="https://todo-list-3297fe.netlify.app" target="_blank">
                  <img src={todoList} alt="TodoList" />
                </a>
                <p className="nameProjects">TODO LIST</p>
                <p className="technologies">REACT TYPESCRIPT SASS</p>
              </div>

              <div className="project">
                <a href="https://weatther-app-20he.netlify.app" target="_blank">
                  <img src={weatherApp} alt="WeatherApp" />
                </a>
                <p className="nameProjects">WEATHER APP</p>
                <p className="technologies">REACT TYPESCRIPT CSS API</p>
              </div>

              <div className="project">
                <a href="https://register-login-teal.vercel.app/" target="_blank">
                  <img src={telaLogin} alt="TelaLogin" />
                </a>
                <p className="nameProjects">REGISTER E LOGIN</p>
                <p className="technologies">REACT NEXT.JS TYPESCRIPT TAILWIND</p>
              </div>
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="sectionContact">Contato <p>Eu adoraria ouvir sobre seu projeto e como eu poderia ajudar.
              Por favor preencha o formulário, e eu entro em contato o mais breve possível. Até logo!</p>
            </div>
            <div className="sectionForm">
              <form id="meuForm" className="form" onSubmit={sendMessage}>
                <div className="form-group">
                  <label htmlFor="email">Nome</label>
                  <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="nome" name="nome" />
                  <label htmlFor="email">Email</label>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="textarea">Mensagem</label>
                  <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="textarea" id="textarea" rows={10} cols={50}></textarea>
                </div>
                <button className="submitBtn" type="submit" onClick={handleButtonClick}>ENVIAR MENSAGEM</button>
              </form>
            </div>
            <div className="socialMedia">
              <span className="icon"><a href="https://github.com/MarcosFernandes99" target="_blank"><img src={github} alt="Github" /></a></span>
              <span className="icon"><a href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/" target="_blank"><img src={linkedin} alt="Linkedin" /></a></span>
              <span className="icon"><a href="https://www.instagram.com/marcos.jr23/" target="_blank"><img src={insta} alt="Instagram" /></a></span>
              <span className="icon"><a href="mailto:juniorfernandes230@gmail.com" target="_blank"><img src={gmail} alt="Email" /></a></span>
            </div>
          </section>
        </main>
      )}
    </div>

  )
}
