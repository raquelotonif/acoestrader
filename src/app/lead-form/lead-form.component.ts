import {Component, OnInit, Inject} from '@angular/core';
import {EmailValidator} from '@angular/forms';
import {AngularFireDatabase} from 'angularfire2/database';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

export class Lead {
    constructor(public name: string,
                public lastname: string,
                public email: string) {
    }
}

@Component({
    selector: 'lead-form',
    templateUrl: './lead-form.component.html',
    styleUrls: ['./lead-form.component.css']
})

export class LeadFormComponent implements OnInit {
    lead = new Lead('', '', '');
    leadSaved: boolean = false;
    leadError: boolean = false;
    ipv4 = '';

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
                this.ipv4 = data['ip']
            });
    }

    saveLead(lead) {
        this.lead = new Lead(lead.name, lead.lastname, lead.email);
        this.angularFire.list("leads").push(this.lead).then(newLead => {
            this.leadSaved = true;
        }, error => {
            console.log('f');
            this.leadError = true;
        });
    }

}
