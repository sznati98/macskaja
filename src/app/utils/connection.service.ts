import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }

  greet(){

    return this.http.get(environment.serverUrl, {responseType: 'text', withCredentials: true}); //aszinkorinitás
  }

  getTranzakcios(){
    return this.http.get(environment.springUrl + '/tranzakciok')
  }
  
  newTranzakcio(termek: any){
    return this.http.post(environment.springUrl + '/tranzakcio', termek)
  }

  newTodo(todo: any){
    return this.http.post(environment.springUrl + '/todos', todo);
  }
}
