import { Address } from './address.model';
import { Company } from './company.model';

export class User {
    _id : string;
    username : string;
    email : string;
    address =  new Address();            
    phone : number;
    website : string;    
    company =new  Company();
    
}
