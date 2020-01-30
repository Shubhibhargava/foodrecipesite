import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';



@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) {
        

     }

    getAll() {
        return this.http.get<User[]>(`http://192.168.18.135:8000/api/players`);
    }

    register(user: User) {
        console.log(user);
        return this.http.post(`http://192.168.18.135:8000/api/players`, user);
    }

    delete(id: number) {
        return this.http.delete(`http://192.168.18.135:8000/api/players/${id}`);
    }
}