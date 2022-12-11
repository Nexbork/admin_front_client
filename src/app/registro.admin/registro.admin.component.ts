import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-registro.admin',
  templateUrl: './registro.admin.component.html',
  styleUrls: ['./registro.admin.component.scss']
})
export class RegistroAdminComponent implements OnInit {

  public user = {
    user_name: '',
    user_surname: '',
    user_document_type: '',
    user_document_number: '',
    user_cellphone: '',
    user_email: '',
    user_password: ''
  }
  
  constructor(private register:RegisterService ,private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    this.register.insertarusuario(this.user).subscribe(
      (data) => { console.log(data)} 
      );
    this.router.navigate([''])
  }
}
