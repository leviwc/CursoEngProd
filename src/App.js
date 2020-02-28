import React,{Component} from 'react';
import Semestre from './components/semestre'
import './App.css';


class App extends Component{
  
  state={

    semestre: [
      {numero: "1", materias: [
      {id: "0",codigo: "ENGF56",nome: "Introdução á engenharia de produção", passou:0,dependencias: [
        
      ]},
      {id: "1",codigo: "MATA01",nome: "Geometria analítica", passou:0,dependencias: [
        
      ]},
      {id: "2",codigo: "MATA02",nome: "Cálculo A", passou:0,dependencias: [
        
      ]}]},

      {numero: "2", materias: [
      {id: "0",codigo: "ENGD01",nome: "Métodos computacionais na engenharia", passou:0,dependencias: [
        {id:"2", numero:"1"}
      ]},
      {id: "1",codigo: "FIS121",nome: "fisica geral e experimental I-E", passou:0,dependencias: [
        
      ]},
      {id: "2",codigo: "MATA03",nome: "Cálculo B", passou:0,dependencias: [
        {id:"1", numero:"1"},{id:"2", numero:"1"}
      ]}]},

      {numero: "3", materias: [
      {id: "0",codigo: "ENG041",nome: "Materiais de construção mecanica I", passou:0,dependencias: [
        {id:"1", numero:"2"}
      ]},
      {id: "1",codigo: "ENGD02",nome: "Estatística na engenharia", passou:0,dependencias: [
        {id:"0", numero:"2"},{id:"2", numero:"2"}
      ]},
      {id: "2",codigo: "MATA07",nome: "Álgebra linear A", passou:0,dependencias: [
        {id:"1", numero:"1"}
      ]},
      {id: "3",codigo: "QUIB50",nome: "Fundamentos de Química", passou:0,dependencias: [
      ]}]},

      {numero: "4", materias: [
      {id: "0",codigo: "ECO151",nome: "Economia e finanças", passou:0,dependencias: [
        {id:"1", numero:"3"}
      ]},
      {id: "1",codigo: "FIS122",nome: "Fisica geral e experimental II-E", passou:0,dependencias: [
        {id:"1", numero:"2"},{id:"1", numero:"1"},{id:"2", numero:"1"}
      ]},
      {id: "2",codigo: "MATA04",nome: "Cálculo C", passou:0,dependencias: [
        {id:"2", numero:"2"}
      ]}]},

      {numero: "5", materias: [
      {id: "0",codigo: "ENG207",nome: "Metrologia industrial", passou:0,dependencias: [
        {id:"1", numero:"2"}
      ]},
      {id: "1",codigo: "ENG269",nome: "Ciências do ambiente", passou:0,dependencias: [
        {id:"3", numero:"3"}
      ]},
      {id: "2",codigo: "ENGF81",nome: "Pesquisa operacional I", passou:0,dependencias: [
        {id:"0", numero:"2"},{id:"1", numero:"3"},{id:"2", numero:"1"},{id:"2", numero:"2"},{id:"2", numero:"3"}
      ]},
      {id: "3",codigo: "ENGF90",nome: "Fundamentos de mecânica dos solidos", passou:0,dependencias: [
        {id:"1", numero:"2"},{id:"2", numero:"1"}
      ]}]},

      {numero: "6", materias: [
      {id: "0",codigo: "ENGF77",nome: "Administração na engenharia", passou:0,dependencias: [
        {id:"0", numero:"1"}
      ]},
      {id: "1",codigo: "ENGF78",nome: "Mecânica dos fluídos", passou:0,dependencias: [
        {id:"1", numero:"4"},{id:"2", numero:"2"}
      ]},
      {id: "2",codigo: "ENGF80",nome: "Sistemas de produção discreta", passou:0,dependencias: [
        {id:"0", numero:"3"},{id:"3", numero:"5"}
      ]},
      {id: "3",codigo: "ENGF82",nome: "Pesquisa operacional II", passou:0,dependencias: [
        {id:"2", numero:"5"}
      ]},
      {id: "4",codigo: "FCC024",nome: "Contabilidade de custos", passou:0,dependencias: [
        {id:"0", numero:"4"}
      ]}]},

      {numero: "7", materias: [
      {id: "0",codigo: "DIR175",nome: "Legislação social", passou:0,dependencias: [
        {id:"0", numero:"6"}
      ]},
      {id: "1",codigo: "ENG308",nome: "Sistemas de garantia de qualidade", passou:0,dependencias: [
        {id:"0", numero:"4"},{id:"1", numero:"3"},{id:"0", numero:"6"}
      ]},
      {id: "2",codigo: "ENGF79",nome: "Princípios dos processos contínuos", passou:0,dependencias: [
        {id:"2", numero:"1"},{id:"3", numero:"3"}
      ]},
      {id: "3",codigo: "ENGF86",nome: "Engenharia econômica", passou:0,dependencias: [
        {id:"0", numero:"4"}
      ]}]},

      {numero: "8", materias: [
      {id: "0",codigo: "ENG037",nome: "Planejamento e controle da produção", passou:0,dependencias: [
        {id:"3", numero:"6"}
      ]},
      {id: "1",codigo: "ENG040",nome: "Gestão empreendedora da engenharia", passou:0,dependencias: [
        {id:"0", numero:"4"},{id:"0", numero:"6"}
      ]},
      {id: "2",codigo: "ENG179",nome: "Projeto e planejamento industrial", passou:0,dependencias: [
        {id:"1", numero:"3"},{id:"2", numero:"6"},{id:"3", numero:"7"}
      ]},
      {id: "3",codigo: "ENG430",nome: "Engenharia de produto", passou:0,dependencias: [
        {id:"2", numero:"6"}
      ]},
      {id: "4",codigo: "ENGA62",nome: "Logística de transportes", passou:0,dependencias: [
        {id:"3", numero:"6"}
      ]}]},

      {numero: "9", materias: [
      {id: "0",codigo: "ENG039",nome: "Gestão da qualidade na engenharia", passou:0,dependencias: [
        {id:"0", numero:"4"},{id:"1", numero:"3"},{id:"0", numero:"6"}
      ]},
      {id: "1",codigo: "ENGF83",nome: "Sistemas de apoio á decisão", passou:0,dependencias: [
        {id:"2", numero:"8"},{id:"1", numero:"3"},{id:"3", numero:"6"}
      ]},
      {id: "2",codigo: "ENGF84",nome: "Modelagem e otimização de sistemas", passou:0,dependencias: [
        {id:"0", numero:"8"},{id:"2", numero:"8"},{id:"4", numero:"8"},{id:"2", numero:"7"},{id:"2", numero:"6"},{id:"3", numero:"6"}
      ]},
      {id: "3",codigo: "ENGF85",nome: "Engenharia do trabalho", passou:0,dependencias: [
        {id:"3", numero:"8"},{id:"4", numero:"8"}
      ]}]},

      {numero: "10", materias: [
      {id: "0",codigo: "ENG432",nome: "Manufatura assistida por Computador", passou:0,dependencias: [
        {id:"0", numero:"8"},{id:"2", numero:"8"},{id:"2", numero:"7"},{id:"2", numero:"6"}
      ]},
      {id: "1",codigo: "ENGF88",nome: "Planejamento do trabalho de conclusão de curso", passou:0,dependencias: [
        {id:"0", numero:"8"},{id:"3", numero:"8"},{id:"0", numero:"6"},{id:"3", numero:"7"}
      ]},
      {id: "2",codigo: "FIS123",nome: "Fisica geral e experimental III-E", passou:0,dependencias: [
        {id:"1", numero:"4"},{id:"2", numero:"2"}
      ]}]},

      {numero: "11", materias: [
      {id: "0",codigo: "ENG003",nome: "Eletricidade", passou:0,dependencias: [
        {id:"2", numero:"10"}
      ]},
      {id: "1",codigo: "ENGF89",nome: "Trabalho de conclusão de curso", passou:0,dependencias: [
        {id:"1", numero:"10"}
      ]}]},

      {numero: "12", materias: [
      {id: "0",codigo: "ENGF87",nome: "Estágio em engenharia de produção", passou:0,dependencias: [
      ]}]}
    ]
  }


  render(){
    return (
      <div>
        <div className="linha">
            {this.state.semestre.map(semestre =>{
              return <Semestre key={semestre.numero} onNormal= {this.onNormal} onBlocked={this.onBlocked} onLiberado={this.onLiberado} semestre={semestre} semestres={this.state.semestre} onClickBotaoPassou={this.onClickBotaoPassou} onClickBotaoPerdeu={this.onClickBotaoPerdeu} />
            })}
        </div>
        <div className="linha">
          <div className="legenda">
            verde fraco= liberada, verde forte=passou, vermelhor forte=perdeu, vermelho fraco=trancada;
          </div>
        </div>
      </div>
    );
  }
  onBlocked = (event) =>{
    let semestre=this.state.semestre;
    const materia=semestre[event.numero-1].materias[event.id];
    semestre[event.numero-1].materias[event.id].passou=4;
    
    this.setState({semestre});
  }
  onNormal = (event) =>{
    let semestre=this.state.semestre;
    const materia=semestre[event.numero-1].materias[event.id];
    semestre[event.numero-1].materias[event.id].passou=0;
    
    this.setState({semestre});
  }
  onLiberado = (event) =>{
    let semestre=this.state.semestre;
    const materia=semestre[event.numero-1].materias[event.id];
    semestre[event.numero-1].materias[event.id].passou=3;
    
    this.setState({semestre});
  }
  onClickBotaoPassou = (event) =>{
    let semestre=this.state.semestre;
    const materia=semestre[event.numero-1].materias[event.id];
    semestre[event.numero-1].materias[event.id].passou=1;
    materia.dependencias.map((content) =>{
      this.onClickBotaoPassou(content);
    });
    this.setState({semestre});
  }
  onClickBotaoPerdeu= (event) =>{
    let semestre=this.state.semestre;
    semestre[event.numero-1].materias[event.id].passou=2;
    this.setState({semestre});
  }
  
}

export default App;
