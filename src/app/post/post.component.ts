import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    postImage = `../../assets/images/thumb1.svg`;
    postTitle = `Investimento Automatizado:
        Entenda como funciona a Compra e Venda de Ações operada por Robôs.`;
    postContent = [`Não é de hoje que a sociedade tem se beneficiado de uma
        série de inovações tecnológicas atreladas à automação: Desde o
        carro de câmbio automático ao frenesi causado pelo lançamento do
        Google Home, a engenharia robótica tem evoluído e se tornado cada
        vez mais acessível.`,
        `Hoje, uma série de serviços e produtos do
        nosso cotidiano se beneficia de um processo automatizado e
        responsivo às questões mais rotineiras, como as porta deslizantes
        que abrem baseada na captação de movimento por sensores.`,
        `Mas o que talvez muitos não tenham imaginado é a integração da
engenharia robótica com o tradicional e manual mercado de ações.
E olha que não estamos falando a respeito de um simples software
que permite a gestão e acompanhamento de como anda a Bolsa de Valores
e sim, de uma inteligência artificial, tal como a do Google Home,
que consegue entender o funcionamento de algo tão complexo como o Mercado
financeiro.`,
        `É chamada de Robôs Traders, ou Robôs de Investimento, a tecnologia
que analisa toda a carteira de ações em que uma pessoa tem investimento
e toma a decisão de quando vendê-las ou comprar novas 
mediante informações obtidas por meio de um monitoramento constante.`,
        `Extremamente confiáveis, os Robôs de Investimento seguem sinais de
compra com informações obtidas por meio de corretoras e te poupa de
envolver emocionalmente e estar em vigilância constante dos índices
e demais aspectos do mercado internacional.`,
        `A novidade chamou atenção principalmente para investidores que estão
dando seus primeiros passos no mercado imobiliário já que o Investimento
automatizado simplifica em muito a administração e controle do dinheiro
aplicado. Mas o uso dos Robôs Traders não fica restrito à esse público:
Segundo publicado pela Bloomberg, em junho desse ano, 75% das operações
financeiras realizadas no mercado de ações nos EUA é realizada via
Investimento Automatizado.`,
        `Mais desconfiado, o brasileiro ainda não entrou de vez na onda dos Robôs
Traders,  mas já existem no mercado empresas especializadas no ramo.
Quer conhecer melhor como opera os robôs, confira o nosso e-Book 12 Passos
Entender Como Funcionam os Robôs Traders.`,

        `Boas compras e boas vendas!`]

    constructor() {
    }

    ngOnInit() {
    }

}
