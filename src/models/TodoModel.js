 export default class TodoModel{
    id;
    title;
    description;
    createdAt;

    constructor(title, description){
        this.id = Math.random() * 100;
        this.title = title;
        this.description = description;
        this.createdAt = Date.now();
    }
}