import { Person } from "./person.model";

export class Album {

    photo: string = '';
    authorId: number = 0;

    constructor(
        public title: string, 
        public authorName: string,
        public authorFirstName: string) {
    }
}