import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDto} from './entity/userDto';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {UserCredentials} from './entity/user-credentials';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getUsers() : Observable<UserDto[]> {
        return this.http.get('http://localhost:8080/users').pipe(map(data=>{
            return data as UserDto[];
        }));
    }

    updateUser(userId: string, body: string) {
        return this.http.patch(`http://localhost:8080/users/${userId}`, body).pipe(map(data=>{
            return data;
        }));
    }

    hasUser(creds: UserCredentials): boolean {
        return true;
    }
}
