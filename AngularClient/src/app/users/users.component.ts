
import { UserService }  from '../shared/user.service';
import { NgForm,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../shared/user.model';

//for testing
import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers : [UserService],
  
})

@NgModule({
  declarations : [ UsersComponent],
  exports  : [UsersComponent,FormsModule,ReactiveFormsModule],
  imports : [CommonModule,FormsModule,ReactiveFormsModule],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersComponent implements OnInit {

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  

  constructor(private userService : UserService) 
  {


  }

  ngOnInit() {
    console.log('ngOninit');
    this.resetForm();
    this.refreshUserList();
  }
  onSubmit(form : NgForm)
  {
   if(form.value._id== "") 
   {
    console.log('onSubmit::' + form.value);   
    console.log('onSubmit::' + JSON.stringify(form.value,undefined,2));   
    this.userService.postUser(form.value).subscribe((res)=>
    {
        console.log('postUser->correctly saved');
        form.resetForm();
    },
    (err)=>
    {
      console.log('postUser->not yet correctly saved');
    });
  }
  else
  {
     this.userService.putUser(form.value).subscribe((res)=>
     {
        console.log('User updated successfully');
        this.refreshUserList();
        form.resetForm();
     },
     (err)=>
     {
        console.log('putuser -> not yet updated successfully');
     });
  }

  }

  resetForm(form? : NgForm)
  {
    if(form)
    {
        form.reset();
        this.userService.selectedUser =         
        {
            _id : '',
            username : '',
            email : '',
            address : 
            {
              street : '',
              suite : '',
              city : '',
              zipcode : '',
              geo : 
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
        }
    }
  }

  refreshUserList()
  {
      this.userService.getUsers().subscribe((res)=>
      {
          this.userService.users = res as User[];
          console.log('resource:' + JSON.stringify(res,undefined,2));
          console.log('users:' + JSON.stringify(this.userService.users,undefined,2));
      },
      (err)=>
      {
          console.log('Error in retreving data');
      });
  }

  onEdit(user : User)
  {
      this.userService.selectedUser = user;
  }

  onDelete(_id : string,form  : NgForm)
  {
      if(confirm("Are you sure you want to delete?")==true)
      {
          this.userService.deleteUser(_id).subscribe((res)=>
          {
              
              this.refreshUserList();
              this.resetForm(form);
              console.log('Successfully user deleted');


          },
          (err)=>
          {
              console.log('Coud not delete user');
          });
      }
      else
      {

      }
  }
}
