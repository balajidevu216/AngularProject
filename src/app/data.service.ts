import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl ='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient ) { }
  getUsers(){
   return this.http.get<User[]>(this.apiUrl);
  }
      getList() {
         return [
                 {'rank': 1,'name':'Dhoni', 'team': 'Chennai Super Kings'   },
                 {'rank': 2,'name':'Rohit', 'team': 'Mumbai Indians'  },
                 {'rank': 3,'name':'Kohli', 'team': 'Royal Challengers Bengaluru' },
                 {'rank': 4,'name':'Shikar', 'team': 'Delhi Dare Devils' },
                 {'rank': 5,'name':'Warner', 'team': 'Sun Risers Hyderabad '  },
                 {'rank': 6,'name':'Dinesh', 'team': 'Kolkatta Knight Riders' }
  ];
  }
  }
  