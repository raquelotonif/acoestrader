import {Component, OnInit} from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    primaryCall = [`Investimento automatizado`];
    secondaryCall = `O Ações Trader é um portal de conteúdos com foco em automatização
    de investimentos para que você, investidor do mercado financeiro, tenha acesso a
    relevantes informações para a tomada de decisão.`;

    constructor() {
    }

    ngOnInit() {
    }
}
