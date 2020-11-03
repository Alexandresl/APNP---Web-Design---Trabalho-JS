import { StudentService } from '../student.service';
import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-read',
  templateUrl: './student-read.component.html',
  styleUrls: ['./student-read.component.css']
})
export class StudentReadComponent implements OnInit {

  students: Student[];
  displayedColumns = ['id', 'name', 'registration', 'action'];

  constructor(private studentsService: StudentService) {}

  ngOnInit(): void {
    this.studentsService.read().subscribe(students => {
      this.students = students
    });
  }

}
