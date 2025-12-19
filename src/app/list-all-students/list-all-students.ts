import { Component } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-list-all-students',
  standalone: false,
  templateUrl: './list-all-students.html',
  styleUrl: './list-all-students.css',
})
export class ListAllStudents {
  students: Student[] =
    [
      {
        id: 1, name: "Prithvi", marks: 92, isEditable: false
      },
      { id: 2, name: "Upasana", marks: 71, isEditable: false },
      { id: 3, name: "Prasad", marks: 26, isEditable: false }
    ]

  newName = '';
  newMarks = 0;
  studentMarks = 0;

  addNewStudent() {
    const newId = this.students.length > 0 ? Math.max(...this.students.map(s => s.id)) + 1 : 1;

    if (!this.newName.trim() || this.newMarks <= 0) {
      alert("Name and marks are mandatory");
      return;
    }
    const student = {
      id: newId,
      name: this.newName,
      marks: this.newMarks,
      isEditable: false
    }

    this.students.push(student);

    this.newName = '';
    this.newMarks = 0;
  }

  deleteStudent(id: any) {
    this.students = this.students.filter(s => s.id !== id);
  }

  getResult(marks: number) {
    if (marks >= 75) return 'distinction';
    if (marks >= 40) return 'pass';
    return 'fail';
  }

  editStudent(student: Student) {
    this.students.forEach(s => s.isEditable = false);
    student.isEditable = true;
    this.studentMarks = student.marks;
  }

  saveStudentMarks(student: Student) {
    student.marks = this.studentMarks;
    student.isEditable = false;
  }
}
