import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-crud',
  templateUrl: './students-crud.component.html',
  styleUrls: ['./students-crud.component.css']
})
export class StudentsCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerDate = {
      title: 'Cadastro de Alunos',
      icon: 'home',
      routeUrl: '/students'
    }
  }

  ngOnInit(): void {
  }

  navegateToStudentCreate(): void {
    this.router.navigate(['/students/create']);
  }

}