import { Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})



export class StudentComponent {
txtHeader : string = "student";

 student  = {
  studentName : "Saman",
    studentNic :""
};
 


onSubmit() {
   alert('Student added successfully!');
   /* this.studentService.addStudent(this.student).subscribe({
      next: (data) => {
       
        this.student = { studentNic: '', studentName: '' }; // reset form
      },
      error: (err) => {
        alert('Failed to add student');
      },
    });
    */
  }

}