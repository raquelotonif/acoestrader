import {Component, OnInit, Inject} from '@angular/core';
import {EmailValidator} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

export class Lead {
    constructor(public name: string,
                public lastname: string,
                public email: string,
                public ipv4?: string) {
    }
}

@Component({
    selector: 'lead-form',
    templateUrl: './lead-form.component.html',
    styleUrls: ['./lead-form.component.css']
})

export class LeadFormComponent implements OnInit {
    lead = new Lead('', '', '', '');
    leadSaved: boolean = false;
    leadError: boolean = false;

    constructor(private angularFire: AngularFireDatabase,
                private jsonp: Jsonp) {
    }

    ngOnInit() {
        this.getIpv4()
    }

    getIpv4() {
        this.jsonp.get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
            .map(response => response.json())
            .subscribe(data => {
                this.lead['ipv4'] = data['ip']
            }, error => {
                console.log('Erro na captura de IP');
            });
    }

    saveLead(name, lastname, email) {
        this.lead = new Lead(name, lastname, email, this.lead.ipv4);
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
