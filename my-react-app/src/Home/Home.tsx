import "./style.scss"
import foto from "../Assets/imagem.svg.png"
import github from "../Assets/github.svg.png"
import linkedin from "../Assets/linkedin.svg.png"
import insta from "../Assets/instagram.png"
import gmail from "../Assets/gmail.png"
import expenseChart from "../Assets/expenseChart.svg.png"
import todoList from "../Assets/todoList.svg.png"
import weatherApp from "../Assets/weatherApp.svg.png"
import Swal from "sweetalert2"
import { useState } from "react"

export const Home = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [phone, setPhone] = useState('')


  const scrollForm = () => {
    const form: any = document.getElementById("meuForm");
    form.scrollIntoView({ behavior: "smooth" })
  }

  const sendMessage = async () => {    

    if (!name || !email || !phone || !message) {
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
      phone,
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
        setPhone('')

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

  // Função para verificar se um elemento está na visualização
  function isElementInViewport(element:any) {
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
    handleSectionVisibility("contact");
  });

  return (
    <main className="container">
      <section className="apresentation">
        <div className="text">
          <div className="title">
            <p>Marcos Fernandes</p>
          </div>
          <div className="headline">
            <p>Sou desenvolvedor front end, com sólidos conhecimentos em  JavaScript, React, HTML, CSS, SASS e APis.
              Atualmente atuo como freelancer desenvolvendo interfaces para sites e aplicativos, com habilidade em implementar soluções modernas
              e atraentes oferecendo assim a melhor experiência possível para o usuário.</p>
          </div>
          <div className="socialIcons">
            <span> <a className="iconLink" href="https://github.com/MarcosFernandes99" target="_blank">
              <img className="icon" src={github} alt="Github" />
            </a></span>
            <span> <a className="iconLink" href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/" target="_blank">
              <img className="icon" src={linkedin} alt="Linkedin" />
            </a></span>
            <span> <a className="iconLink" href="https://www.instagram.com/marcos.jr23/" target="_blank">
              <img className="icon" src={insta} alt="Instagram" />
            </a></span>
            <span> <a className="iconLink" href="mailto:juniorfernandes230@gmail.com" target="_blank">
              <img className="icon" src={gmail} alt="Email" />
            </a></span>
            <button className="btn" onClick={scrollForm}>CONTATE-ME</button>
          </div>       
        </div>

        <div className="photo">
          <img className="myPhoto" src={foto} alt="Photo" />
        </div>
      </section>

      <section className="specialties" id="specialties">
        <div className="sectionSpecialties">
          <span className="specialtie">HTML <p>1 ano de experiência</p></span>
          <span className="specialtie">Javascript <p>1 ano de experiência</p></span>
          <span className="specialtie">CSS <p>1 ano de experiência</p></span>
          <span className="specialtie">React <p>6 meses de experiência</p></span>
          <span className="specialtie">Sass <p>6 meses de experiência</p></span>
          <span className="specialtie">API <p>6 meses de experiência</p></span>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="titleContact">
          <span className="titleProjects">Projetos</span>
          <button className="btn" onClick={scrollForm}>CONTATE-ME</button>
        </div>

        <div className="sectionProjects">
          <div className="project">
            <a href="https://todo-list-3297fe.netlify.app" target="_blank">
              <img src={todoList} alt="TodoList" />
            </a>
            <p className="nameProjects">TODO LIST</p>
            <p className="technologies">HTML CSS JAVASCRIPT</p>
          </div>

          <div className="project">
            <a href="https://expense-chart-9d8713.netlify.app" target="_blank">
              <img src={expenseChart} alt="ExpenseChart" />
            </a>
            <p className="nameProjects">EXPENSES CHART</p>
            <p className="technologies">HTML CSS JAVASCRIPT</p>
          </div>

          <div className="project">
            <a href="https://weatther-app-20he.netlify.app" target="_blank">
              <img src={weatherApp} alt="WeatherApp" />
            </a>
            <p className="nameProjects">WEATHER APP</p>
            <p className="technologies">HTML CSS JAVASCRIPT API</p>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="sectionContact">Contato <p>Eu adoraria ouvir sobre seu projeto e como eu poderia ajudar.
          Por favor preencha o formulário, e eu entro em contato o mais breve possível. Até logo!</p>
        </div>
        <div className="sectionForm">
          <form id="meuForm" className="form" action="Submit">
            <textarea onChange={(e) => setName(e.target.value)} value={name} id="nome" placeholder="Nome" />
            <textarea onChange={(e) => setEmail(e.target.value)} value={email} id="email" placeholder="Email" />
            <textarea onChange={(e) => setPhone(e.target.value)} value={phone} id="telefone" placeholder="Telefone" />
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="msg" className="msg" placeholder="Mensagem" />
          </form>
          <button className="submitBtn" type="submit" onClick={sendMessage}>ENVIAR MENSAGEM</button>
        </div>
        <div className="socialMedia">
          <span className="icon"><a href="https://github.com/MarcosFernandes99" target="_blank"><img src={github} alt="Github" /></a></span>
          <span className="icon"><a href="https://www.linkedin.com/in/marcos-fernandes-8a4711175/" target="_blank"><img src={linkedin} alt="Linkedin" /></a></span>
          <span className="icon"><a href="https://www.instagram.com/marcos.jr23/" target="_blank"><img src={insta} alt="Instagram" /></a></span>
          <span className="icon"><a href="mailto:juniorfernandes230@gmail.com" target="_blank"><img src={gmail} alt="Email" /></a></span>
        </div>
      </section>
    </main>
  )
}
