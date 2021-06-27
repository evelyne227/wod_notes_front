export class WodPerso
{
    id: number;
    name: string;
    created_at: Date; 
    category_id: number;
    unit_id: number;
    user_id: number;
    description: string;

    constructor(data: any)
    {
        this.id = data.id;
        this.name = data.name;
        this.created_at = data.created_at;
        this.category_id = data.category_id;
        this.unit_id = data.unit_id;
        this.user_id = data.user_id;
        this.description = data.description;
    }
}

