import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user.model';
import { NgForOf } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser : User ={
    _id :'',
    username : '',
    email : '',
    address :
    {
      street : '',
      suite : '',
      city : '',
      zipcode: '',
      geo:
      {
        lat : '',
        lang : ''
      }
    },
    phone : undefined,
    website : '',
    company :
    {
      name : '',
      catchPhrase : '',
      bs : ''
      
    }

  };
  users : User[];
  constructor(private http : HttpClient) 
  {

   }

   postUser(user : User)
   {
     return this.http.post(environment.apiBaseUrl + '/saveUser', user);
   }

   getUsers()
   {
     return this.http.get(environment.apiBaseUrl + '/getUsers');
   }

   putUser( user : User)
   {
     return this.http.put(environment.apiBaseUrl+ '/updateUserById/'+`${user._id}`,user);
   }

   deleteUser(_id :string)
   {
     return this.http.delete(environment.apiBaseUrl+'/deleteUserById/' + `${_id}`);
   }
}
