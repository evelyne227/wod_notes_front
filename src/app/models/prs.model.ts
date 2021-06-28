export class Prs
{
    id: number;
    date: Date;
    result: number; 
    comment: string;
    exercise_id: string;
    exercise_name: string;
    category_name: string;
    sub_category_name: string;
    wod_perso: number;
    user_id: number;

    constructor(data: any)
    {
        this.id = data.id;
        this.date = data.date;
        this.result = data.result;
        this.comment = data.comment;
        this.exercise_id = data.exercise_id;
        this.exercise_name = data.exercise_name;
        this.category_name = data.category_name;
        this.sub_category_name = data.sub_category_name;
        this.wod_perso = data.wod_perso;
        this.user_id = data.user_id;
    }
}