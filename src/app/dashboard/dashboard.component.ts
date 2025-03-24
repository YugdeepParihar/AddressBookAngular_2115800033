import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Person {
  id: number;
  fullname: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showForm = false;
 persons: Person[] = [
  { id: 1, fullname: "John Doe", address: "123 Main St", city: "New York", state: "NY", zipCode: "10001", phoneNumber: "1234567890" },
  { id: 2, fullname: "Jane Smith", address: "456 Elm St", city: "Los Angeles", state: "CA", zipCode: "90001", phoneNumber: "9876543210" },
  { id: 3, fullname: "Alice Johnson", address: "789 Maple St", city: "Chicago", state: "IL", zipCode: "60601", phoneNumber: "2345678901" },
  { id: 4, fullname: "Robert Brown", address: "321 Oak St", city: "Houston", state: "TX", zipCode: "77001", phoneNumber: "3456789012" },
  { id: 5, fullname: "Emily Davis", address: "654 Pine St", city: "Phoenix", state: "AZ", zipCode: "85001", phoneNumber: "4567890123" },
  { id: 6, fullname: "Michael Wilson", address: "987 Cedar St", city: "Philadelphia", state: "PA", zipCode: "19101", phoneNumber: "5678901234" },
  { id: 7, fullname: "Sarah Miller", address: "246 Birch St", city: "San Antonio", state: "TX", zipCode: "78201", phoneNumber: "6789012345" },
  // { id: 8, fullname: "James Anderson", address: "135 Spruce St", city: "San Diego", state: "CA", zipCode: "92101", phoneNumber: "7890123456" },
  // { id: 9, fullname: "Olivia Martinez", address: "579 Redwood St", city: "Dallas", state: "TX", zipCode: "75201", phoneNumber: "8901234567" },
  // { id: 10, fullname: "David Taylor", address: "864 Chestnut St", city: "San Francisco", state: "CA", zipCode: "94101", phoneNumber: "9012345678" }
];


  newPerson: Person = { id: 0, fullname: '', address: '', city: '', state: '', zipCode: '', phoneNumber: '' };

  addPerson(): void {
    this.newPerson.id = this.persons.length + 1;
    this.persons = [...this.persons, this.newPerson];
    this.newPerson = { id: 0, fullname: '', address: '', city: '', state: '', zipCode: '', phoneNumber: '' };
    this.showForm = false;
  }

  updatePerson(person: Person): void {
    this.persons = this.persons.map(p => p.id === person.id ? { ...p, fullname: "Updated Name" } : p);
  }

  deletePerson(id: number): void {
    this.persons = this.persons.filter(person => person.id !== id);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
