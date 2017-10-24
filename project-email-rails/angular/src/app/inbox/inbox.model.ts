export class Inbox {
   name: string;
   imagePath: string;
   descriptionHeader: string;
   description: string;
   badge: string;
   starred: boolean;
   important: boolean;

   constructor( name: string, imagePath: string, descriptionHeader: string, description: string, badge: string, starred: boolean, important: boolean) {

      this.name = name;
      this.imagePath = imagePath;
      this.descriptionHeader = descriptionHeader;
      this.description = description;
      this.badge = badge;
      this.starred = starred;
      this.important = important;
   }
}
