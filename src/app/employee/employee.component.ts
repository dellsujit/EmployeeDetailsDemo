import { Component, OnInit } from '@angular/core';
import employeeData from '../employee.json';


interface Employee
{
 EmployeeID:Number;
 EmployeeName:String;
 DateOfBirth:string;
 Designation:String;
 Department:String;
 JoinDate:string;
 TotalEperience:string
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
 
   employee : Employee[] = employeeData; 
  ngOnInit(): void {}

  key:string = "EmployeeID";
  reverse:boolean= false;
  sort(key: string)
  {
    this.key=key;
    this.reverse=!this.reverse;
  }

}
