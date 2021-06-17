export class User
{
    id: number;
    user_name: string;
    last_name: string; 
    first_name: string;
    birth_date: Date;
    gender: string;
    password: string;
    email: string; 

    constructor(data: any)
    {
        this.id = data.id;
        this.user_name = data.user_name;
        this.last_name = data.last_name;
        this.first_name = data.first_name;
        this.birth_date = data.birth_date;
        this.gender = data.gender;
        this.password = data.password;
        this.email = data.email;
    }
}