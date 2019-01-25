//===============================================================================
// © 2018 Optipro.  All rights reserved.
// Original Author: Shashank Jain
// Original Date: 10 March 2018
//==============================================================================

export class RegisterRequest {
    // CompanyName: string;
    // PrimaryUserFirstName:string;
    // PrimaryUserLastName:string;
    // PrimaryUserEmail:string;
    // PrimaryUserPhone:string;
    // UserType:number;
    // Password: string;
    // ConfirmPassword: string;

    RequesterEmail: string;
    RequesterName: string;
    RequesterPhone: string;         
    RequestedRoleId: string;
    RequesterParentCode: string;
    RequesterParentType: number;
}