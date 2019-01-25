export class NotesModel{    
    // uniquie identify of note
    NoteId:string;
    //note text
    Notes:string;  
    // type is system generated note or user note
    NoteType : number; //normal: 1,Rejected = 2,PartialApproved = 3 .
    // GrandParentType type of inquiry
    GrandParentType:number ; // customer Entity  .
    // ParentId is id of item or inquiry
    ParentId:string;  //.
    // parent type
    ParentType: number;  //.
    // grand parent id 
    GrantParentId:string ='00000000-0000-0000-0000-000000000000';


}