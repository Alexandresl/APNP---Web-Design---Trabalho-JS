import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "http://localhost:3001/students";

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.baseUrl, student).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  readById(id: number): Observable<Student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  update(student: Student): Observable<Student> {
    const url = `${this.baseUrl}/${student.id}`;
    return this.http.put<Student>(url, student).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  delete(id: number): Observable<Student> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Student>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );;
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

}
