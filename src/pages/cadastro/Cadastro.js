import React, {Component} from 'react'; 
import '../../assets/CSS/Cadastro/Cadastro.css';
import logo from '../../assets/imagens/logo1.png';




class Cadastro extends Component {

constructor (){
    super();
    this.state = {
        Nome:"",
        Email: "",
        Senha: ""
    }
    this.cadastrarUsuario = this.cadastrarUsuario.bind(this);
}

cadastrarUsuario(event){//Event faz funcionar a função.

    event.preventDefault(); //Usado para previnir a página
    console.log("Cadastrando");//Mostrar o que está acontecendo

    //Caminho de pega as informações da API
    fetch('http://localhost:5000/api/usuario',{ 

        //Estrutura do código, sempre tem que ter
        method: "POST", //Qual metedo vai usar

        //O tipo, Tipo JSON e dentro da os nomes das variaveis
        //HEADERS, Refoço que é do tipo JSON
        body: JSON.stringify({nome: this.state.nome, 
                              Email: this.state.email,
                              Senha: this.state.enha}),
        headers: {
            "Content-Type" : "application/json" 
        }
    })
    .then(Response => Response.json()) //Then - Então, diz que vai retornar tudo que tem dentro do meu fetch
    .catch(error => console.error(error)); // Qualquer erro que tiver vai mostrar console
}

atualizaEstado = (event) => {
    this.setState({[event.target.name]: event.target.value}); // Função que pega do HTML
}

// INICIO DO HTML
    render() {
        return (
            <div>
                <main>

                    <section id="background">

                        {/* Parte principal do corpo do site  */}
                        <div className="sessao">

                            {/* <!-- Sessão definida para dividir o campo de login --> */}
                            <div className="campo1">

                                {/* <!-- Div definida para formatar o campo de login --> */}
                                <h1 className="h1topo"> Crie sua conta na</h1>

                                <div className="logo_twc">
                                    <img src={logo} alt=""/>
                                {/* <!-- Div para imagem dentro do campo de login --> */}
                            </div>

                            <form id="formulario" onSubmit = {this.cadastrarUsuario}>

                                {/* <!-- Tag criada para criar formulário --> */}
                                <input type="text" name="nome" id="iNome" placeholder="Nome" size="15" maxlength="50" required="required" onChange = {this.atualizaEstado.bind(this)}/> 
                                {/* <!-- Input criado para usuário inserir o nome para acesso --> */}

                                <input type="text" name="email" id="iEmail" placeholder="Email" size="15" maxlength="50" required="required" onChange = {this.atualizaEstado.bind(this)}/> 
                                {/* <!-- Input criado para usuário inserir o email para acesso --> */}

                                <input type="password" name="senha" placeholder="Senha" size="15" maxlength="50" required="required" onChange = {this.atualizaEstado.bind(this)}/> 
                                {/* <!-- Input criado para usuário inserir senha dde acesso --> */}

                                <input type="password" name="tCSenha" placeholder="Confirmar Senha" size="15" maxlength="50" required="required" onChange = {this.atualizaEstado.bind(this)}/> 
                                {/* <!-- Input criado para usuário inserir senha dde acesso --> */}

                                <div className="criar_conta">
                                    <button type = "submit">Criar Conta</button>
                                </div>

                                <div className="termo">
                                    <p>Ao clicar em criar conta, você está de acordo com os termos de serviço do TWMarketplace.</p>
                                </div>
                            </form>
                        </div>
                        
                        </div>   

                    </section>

                </main>

            </div>
     
        );
    }
}

export default Cadastro;
