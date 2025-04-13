import React from "react";
import "./index.css";
import "./App.css";
import Barra from "./Barra";
import MainCon from "./MainCon";
import Sidebar from "./SideBar";
import Post from "./Post";

function App() {
  return (
    <div className="container">
      
      <header className="header">
        <Barra />
      </header>

      <div className="image-container">
        <img 
          src="/Imagensd.jpg" 
          className="main-image" 
          alt="Imagem de aprendizagem"
        />
      </div>

      <div className="content-container">
        <main className="main-content">
          <MainCon />
          <div className="posts-container">
 
            <Post 
              titulo="Para ser muito bom amanhã é preciso começar a praticar hoje"
              autor="Prof. Cleiton"
              data="24 Fev 25"
              hora="16:40"
              conteudo="São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, inclusive as quatro operações - soma, subtração, multiplicação e divisão. Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :(  

              Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nos primeiros anos escolares e buscará aperfeiçoar seu conhecimento nas operações básicas."
              hashtags= {["#MatematicaParaCriancas", "#Educacao"]}
            />

            <Post 
              titulo="Matemática: O Alicerce para o Sucesso Escolar!" 
              autor="Prof. Cleiton"
              data="24 Fev 25"
              hora="16:40"
              conteudo={
                <>
                  <p>A matemática é essencial para o desenvolvimento do raciocínio lógico desde os primeiros anos escolares. É nesse momento que as crianças aprendem adição, subtração, multiplicação e divisão, habilidades fundamentais para sua trajetória acadêmica.</p>
                  
                  <p>Dificuldades nessa fase podem comprometer o aprendizado a longo prazo, mas com a prática certa, seu filho pode desenvolver confiança e autonomia nos números!</p>
                  
                  <p>Aqui, oferecemos exercícios educativos e interativos para tornar o aprendizado mais leve e divertido. Vamos juntos fortalecer essa base e transformar desafios em conquistas! 🚀</p>

                  <p className="post-hashtags">
                    #MatematicaParaCriancas #EducacaoMatematica #OperacoesBasicas <br/>
                    #AprendizadoDivertido #FundamentosEscolares #MatematicaFacil #ConfiancaNosNumeros
                  </p>
                  <aside className="sidebar">
                  <Sidebar />
                   </aside>
                </>
                
              }
            />
          </div>
        </main>
      </div>
    </div> 
  ); 
}

export default App;
