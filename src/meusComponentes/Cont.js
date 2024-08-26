import {Component} from "react";

export default class Cont extends Component{

    constructor(props){
        super();
        this.state = { valor: 0};
        this.incrementar = this.incrementar.bind(this);
        this.decrementar = this.decrementar.bind(this);
    }

    incrementar(){
        let valorAtual = this.state.valor; 
        let valorNovo = valorAtual+1;
        this.setState({
            valor: valorNovo
        });
    }

    decrementar(){
        let valorAtual = this.state.valor; 
        let valorNovo = valorAtual-1;
        this.setState({
            valor: valorNovo
        });
    }

    render(){
        return (
            <div>
                <div className="visor">
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={()=>{this.incrementar();}}>+</button>
                    <button onClick={()=>{this.decrementar();}}>-</button>
                </div>
            </div>
        );
    }
}