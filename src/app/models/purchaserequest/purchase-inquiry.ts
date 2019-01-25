import { PurchaseInquiryItemModel } from "./purchase-inquiry-item";
import { NotesModel } from "./notes";

export class PurchaseInquiryModel{    
    InquiryId:number;
    CustomerId:number;
    CustomerName:string;
    InquiryStatus:string;
    ValidUntil:string;
    ReferenceId: string;
    CreatedDate:string;
    Buyer:string;//CreatedBy:string;
    ModifiedDate:string;
    ModifiedBy:string;
    public PurchaseEnquiryItemList: Array<PurchaseInquiryItemModel>=[];
    public NotesList: Array<NotesModel>=[];

    purchaseInquiryId : number;
    inquiryNumber : number;
    status : 2;
    validTillDate : "2018-10-25T06:42:00";
    customerCode : "C002";
    customerName : "Ankur Sharma";
    referenceNumber : "Mumbai";
    createdDate : "2018-08-01T13:44:36.3370289";
    createdBy : "8c924217-5807-4941-a319-7c3de43881c4";
    modifiedDate : "2018-08-01T13:44:36.3370289";
    modifiedBy : "68865bab-641f-4555-901c-f5a5ea78d3a6";
    tenantId : "68865bab-641f-4555-901c-f5a5ea78d3a6";
    
}