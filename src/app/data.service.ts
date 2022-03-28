import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
    constructor() { }
      
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