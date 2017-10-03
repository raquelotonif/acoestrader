import {Component, OnInit, Inject} from '@angular/core';
import {EmailValidator} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

import * as moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-BR');

export class Lead {
    constructor(public email: string,
                public nome: string,
                public ip: string,
                public tipo: string,
                public data_hora: string,) {
    }
}

@Component({
    selector: 'lead-form',
    templateUrl: './lead-form.component.html',
    styleUrls: ['./lead-form.component.css']
})

export class LeadFormComponent implements OnInit {
    lead = new Lead('', '', '', 'B2C', '');
    tipoChecked = 'B2C';
    leadSaved: boolean = false;
    leadError: boolean = false;

    constructor(private angularFire: AngularFireDatabase,
                private jsonp: Jsonp) {
    }

    ngOnInit() {
        this.getIpv4();
    }

    getIpv4() {
        this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
            .map(response => response.json())
            .subscribe(data => {
                this.lead['ip'] = data['ip']
            }, error => {
                console.log('Erro na captura de IP');
            });
    }

    getDate() {
        let date = moment();
        return moment(date).format('YYYY-MM-DD HH:MM:SS');
    }

    saveLead(email, nome, lastname, tipo) {
        let now = this.getDate();
        let name = nome + ' ' + lastname;
        this.lead = new Lead(email, name, this.lead.ip, tipo, now);
        this.angularFire.list("leads").push(this.lead).then(newLead => {
            this.leadSaved = true;
        }, error => {
            this.leadError = true;
            console.log(error.message);
        });
    }

    goToDownloadEbook() {
        if (!this.leadSaved) {
            return;
        }
        window.open("https://drive.google.com/file/d/0ByyRKAPF0hnJZXZlOTRZbTZzbmM/view?usp=sharing", "_blank");
    }
}
