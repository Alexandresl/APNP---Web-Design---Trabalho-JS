import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../student.service';
import { Student } from './../student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  student: Student;

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.readById(id).subscribe(student => {
      this.student = student;
    });
  }

  deleteStudent(): void {
    this.studentService.delete(this.student.id).subscribe(() => {
      this.studentService.showMessage('Estudante excluído com sucesso!');
      this.router.navigate(['/students']);
    });
  }

  cancel(): void {
    this.router.navigate(['/students']);
  }

}
