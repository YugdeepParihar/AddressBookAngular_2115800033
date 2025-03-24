import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Person {
  id?: number;
  fullname: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'https://api.example.com/persons';  // ❌ Placeholder API
  private dummyData: Person[] = [ // ✅ Added Dummy Data
    { id: 1, fullname: 'John Doe', address: '123 Main St', city: 'New York', state: 'NY', zipCode: '10001', phoneNumber: '123-456-7890' },
    { id: 2, fullname: 'Jane Smith', address: '456 Maple Ave', city: 'Los Angeles', state: 'CA', zipCode: '90001', phoneNumber: '987-654-3210' }
  ];

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return of(this.dummyData); // ✅ Return Dummy Data instead of HTTP request
  }

  addPerson(person: Person): Observable<Person> {
    person.id = this.dummyData.length + 1;
    this.dummyData.push(person);
    return of(person);
  }

  updatePerson(person: Person): Observable<Person> {
    const index = this.dummyData.findIndex(p => p.id === person.id);
    if (index !== -1) {
      this.dummyData[index] = person;
    }
    return of(person);
  }

  deletePerson(id: number): Observable<void> {
    this.dummyData = this.dummyData.filter(person => person.id !== id);
    return of();
  }
}
