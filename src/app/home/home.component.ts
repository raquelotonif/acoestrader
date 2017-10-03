import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    primaryCall = [`Mercado de ações`];
    secondaryCall = `O ações Trader é um portal de conteúdos feito
    para que você, investidor do mercado financeiro, tenha acesso à informações
    para tomar as melhores decisões.`;

    constructor() {
    }

    ngOnInit() {
    }
}
