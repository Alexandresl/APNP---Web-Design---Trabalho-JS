import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = {
    name: '',
    registration: ''
  }

  constructor(private studentsService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  createStudent(): void {
    this.studentsService.create(this.student).subscribe(() => {
      this.studentsService.showMessage('Produto criado!');
      this.router.navigate(['/students'])
    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }

}
