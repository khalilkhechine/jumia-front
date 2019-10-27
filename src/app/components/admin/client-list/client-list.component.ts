import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ClientService} from '../../../services/client.service';
import {Client} from '../../../model/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  /*client  = [
    {id: 1, firstName: 'Khalil', lastName: 'Khechine', email: 'khalilkhechine@gmail.com',
      password: '351', address: 'Kairouan, Tunisia', phoneNumber: '22459908', birthDate: new Date(1999, 7, 6)},
    {id: 2, firstName: 'Ahmed', lastName: 'Hmayer', email: 'ahmed.hmayer@gmail.com', password: '32630',
      address: 'Ariana, Tunisia', phoneNumber: '22778899', birthDate: new Date(1998, 6, 3)},
    {id: 3, firstName: 'Achref', lastName: 'Ferchichi', email: 'achref.ferchichi@gmail.com', password: '62+63',
      address: 'El-Krib, Tunisia', phoneNumber: '22447788', birthDate: new Date(1995, 5, 8)},
    {id: 4, firstName: 'Ahmed', lastName: 'Sboui', email: 'ahmed.sboui@gmail.com', password: '65320.',
      address: 'Sousse, Tunisia', phoneNumber: '65165135', birthDate: new Date(1991, 1, 10)},
  ];*/
  searchInputFormControl: FormControl = new FormControl();
  displayedClient: Client[];
  // clients: Client[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClients();
    this.searchInputFormControl.valueChanges.subscribe(value => {
    /*  if (value !== '') {
        console.log(value);
        this.displayedClient = this.clients.filter(e => e.email.includes(value));
      } else {
        this.displayedClient = this.clients;
      }*/

    const that = this;
      // tslint:disable-next-line:only-arrow-functions
    setTimeout(function() {
      if (value !== '') {
        that.clientService.searchByEmail(value).subscribe(apiResponse => {
          that.displayedClient = apiResponse;
        }, error => {
          console.log(error);
        });
      } else {
        that.getAllClients();
      }
    }, 500);
    });
  }

  getAllClients() {
    this.clientService.getAll().subscribe( apiResponse => {
    //  this.clients = apiResponse;
      this.displayedClient = apiResponse;
    }, error => {
      console.log(error);
    });
  }
}
