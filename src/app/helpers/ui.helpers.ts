//===============================================================================
// © 2018 Optipro.  All rights reserved.
// Original Author: Shashank Jain
// Original Date: 10 March 2018
//==============================================================================

import * as $ from "jquery";
import { CurrentSidebarInfo } from "../models/sidebar/current-sidebar-info";

export  class UIHelper{

    // start sidebar and right panel manage
    // this function will call only for desktop and ipad
    public static  manageNavigationPanel():void{
        document.getElementById('sidebarCollapse').onclick = function() {
        if(UIHelper.isMobile()==false){ 
            document.getElementById('opti_LeftPanelID').classList.toggle('opti_sidebar-minimize');  
            document.getElementById('opti_RightPanelID').classList.toggle('opti_sidebar-minimize');
        }else{
            document.getElementById('opti_LeftPanelID').classList.toggle('opti_menusidebar-mobile-open');  
            document.getElementById('opti_RightPanelID').classList.toggle('opti_menusidebar-mobile-open');
        }
        };  
    }

    // Apply class on the basis of device
    public static deviceClass(){
        let isDevice:string;
        let getDeviceWidth = screen.width;
        //alert(getDeviceWidth);
    }


    // check is it mobile or not
    public static isMobile():boolean{
        let isMobile:boolean;
        // let getDeviceWidth = window.outerWidth;
        // let getDeviceHeight = window.outerHeight;

        let getDeviceWidth = screen.width;
        let getDeviceHeight = screen.height;
        
        //alert(getDeviceWidth);
        // alert(getDeviceHeight);

        if(getDeviceWidth <= 767){
        isMobile = true; 
        }else{
        isMobile = false; 
        }
        return isMobile;
    }

    // get main content height for mobile and desktop
    public static getMainContentHeight(){
        let mainContenntHeight:number;
        if(UIHelper.isMobile()==false){ 
            mainContenntHeight = window.innerHeight-85;
        }else{
            mainContenntHeight = window.innerHeight-85
        }
        return mainContenntHeight;
    }


    // Apply Theme CSS FILE
    public static manageThemeCssFile(){
        $(document).ready(function(){
            
            $('#opal').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_blue_opal.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });

            // $('#bootstrap').click(function (){
            //     $('footer').find('link.opti__theme-css-file').remove();
            //     $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo.custom.bootstrap.v3.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            // });

            $('#urban').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_urban.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });

            $('#skype').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_skype.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });

            $('#green').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_green.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });

            $('#stripe').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_stripe.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });

            $('#coffee').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_coffee.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });

            $('#newtrend').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_newtrend18.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            $('#castify').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_castify.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            $('#sunrise').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_sunrise.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            $('#maldive').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_maldive.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            $('#borabora').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_borabora.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            $('#bluelagoo').click(function (){
                $('footer').find('link.opti__theme-css-file').remove();
                $('footer').append('<link rel="stylesheet" href="../assets/css/theme/kendo_custom_bluelagoo.css?v= ' + (new Date()).getTime() + '" class="opti__theme-css-file" type="text/css" />');
            });
            
        });
    }

    // our custom tab section
    public static customOpenTab(evt,  type) {
        if(type == 'horizontal'){
            var i, tabcontent, tablinks;
            // tabcontent = document.getElementsByClassName("opti_tabcontent");
            // for (i = 0; i < tabcontent.length; i++) {
            //     tabcontent[i].style.display = "none";
            // }
            tablinks = document.getElementsByClassName("opti_tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }
            //document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }else{
            var i, tabcontent, tablinks;
            // tabcontent = document.getElementsByClassName("opti_tabcontent");
            // for (i = 0; i < tabcontent.length; i++) {
            //     tabcontent[i].style.display = "none";
            // }
            tablinks = document.getElementsByClassName("opti_tablinks-vertical");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace("active", "");
            }
            //document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }    
    }

    // get width of opti_TabID 
    // public static getWidthOfOuterTab(){
    //     let i;
    //     let a;
    //     let tabWidth : number = 0;
    //     let tablinks = document.getElementsByClassName("opti_tablinks") as HTMLCollectionOf<HTMLElement>;
    //     for (i = 0; i < tablinks.length; i++) {
    //         tabWidth = tabWidth + tablinks[i].offsetWidth;
    //     }
    //     document.getElementById("opti_TabID").style.width  = tabWidth-50+'px';
    // }

    // get width of opti_TabID 
    // This is temporary function we create this function because if we do (save) or (save as draft) purchase inquiries that case we face issue in tab regarding width
    // public static getWidthOfOuterTabUpdateInq(){
    //     let i;
    //     let a;
    //     let tabWidth : number = 0;

    //     setTimeout(()=>{
    //         let tablinks = document.getElementsByClassName("opti_tablinks") as HTMLCollectionOf<HTMLElement>;
    //         for (i = 0; i < tablinks.length; i++) {
    //             tabWidth = tabWidth + tablinks[i].offsetWidth;
    //         }
    //         document.getElementById("opti_TabID").style.width  = tabWidth-50+'px';
    //     }, 500);
    // }

    /**
     * Open Right section container
    */
    // static isRightSectionContainer:boolean = false;
    // static setRightSectionContainerValue(value:boolean){
    //     alert(value);
    //     this.isRightSectionContainer = value;
    // }


}