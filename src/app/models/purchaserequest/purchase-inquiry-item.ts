import { NotesModel } from "./notes";

export class PurchaseInquiryItemModel{    
    PurchaseInquiryItemlId:number;
    CustomerItemIdOrDescription:string;
    ItemDescription:string;
    Quantitiy: number;
    Unit: string;
    Comments:string;
    Requester:string; //it will be a free text.
    RequestDate: string;
    RequiredDate: string;
    ShipToLocation: string;
    public notesList: Array<NotesModel>=[];
    
}