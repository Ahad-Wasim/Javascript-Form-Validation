var pages={
    Welcome: 
        {pageUrl : 'home.html', default:true},
    "Our Macarons" : 
        { pageUrl : 'macarons.html'},
    "Gifts & Parties" : 
        { pageUrl :'gifts-parties.html'},
    Contact : 
        { pageUrl : 'contact.html'}
};

//beginnings of an object for use with error validation
var input_validation = {
    name: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
    email: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
    phone: 
        {regex: /[a-zA-Z]{3,}/,
         error_msg:"Must be at least 3 characters long, no numbers or characters"},
};

$("document").ready(function(){

//do stuff when the document is ready!
/*$(".main-nav li a").each(function(){
        //do something to each item found
        $(this).click(function(){

            var my_page = pages[$(this).text()];
            console.log(my_page);
            load_page(my_page.pageUrl);
        });
    });*/
    create_menu();
});
/*<li data-url="home.html"><a >Welcome</a></li>*/
function create_menu(){
    var main_nav_ul = $(".main-nav ul");
    for(var index in pages){
        console.log("The index is "+index);
        var li = $("<li/>");
        var a = $("<a/>").text(index);
        (function(){
            var my_index = index;
            li.on("click","a",function(){
                var my_page = pages[my_index];
                load_page(my_page.pageUrl);
            });
        })();
        li.append(a);
        //a.appendTo(li);
        main_nav_ul.append(li);
        if(pages[index].default==true){
            load_page(pages[index].pageUrl);
        }
    }
}


function load_page(page_url){
    //load the indicated page into the #main_content section
    $.get(page_url,function(data){
        $("#main_content").html(data);
    });
    
}








function validate_contact(){
    var contact_inputs = $("#contact_form input, #contact_form textarea");                  // Grab the Contact Form Inputs + The TextArea and storing that in a variable
    console.log(contact_inputs);                                                            
    //keep track of how many errors there are
    var error_count = 0;                                                                    // If their is an Error. The MESSAGE WONT SEND. Start the Error at 0
   
    
        $("#contact_form .error_msg").remove();                                             // if there is an error remove it
    
    $(contact_inputs).each(function(){                                                      // Iterate through the Contact Form Inputs + The TextArea 
       
        var str='';                                                     // the str val would hold the value inside the input. We would then compare that later on
        
        var regex=null;                                                                     // if regex is not vailid it will equal null
        
        var error_msg = '';                                                                 // error message will start off blank
        
        
        
        
        
        //input_validation[$(this).attr('name')];  //beginnings of USING the object for input validation
        
        
        
        
        
        
        
        
        switch($(this).attr('name')){                                                         // if this inputs value .attribute = name
                case 'name':                                                                  // if the attributes name == name then perform the bottom
                   
                str = $(this).val();                                                          //the variable str == the value
                    regex = /[a-zA-Z]{3,}/;                                                   // the REGEX the str must equal to
                    error_msg="Must be at least 3 characters long, no numbers or characters"; // if Regex does not match perform this part
                    break;
                
                case 'email':                                                               // if the attributes name == email then perform the bottom
                    str = $(this).val();                                                    //Grab the value of that and store it inside string
                    regex = null;                                                           //were not trying to match the REGEX so it is all ready returning null
                    error_msg="";                                                           // There is no error message
                    break;
                
                case 'phone':                                                               // if the attributes name == phone then perform the bottom
                    str = $(this).val();                                                    //Grab the value of that and store it inside string
                    regex = null;                                                           //it doesn't have any limitations                                     
                    error_msg="";                                                           // there is no error
                    break;
                
                case 'subject':
                    str = $(this).val();
                    regex = null;
                    error_msg="";
                    break;
                case 'comments':
                    str = $(this).val();
                    regex = /.{3,250}/;                                                 //Their should be between 3,250 characters
                    error_msg="Comments can only be between 3 and 250 characters";
                    break;
                default:
        } //This closes the switch statement
        
        
        
        
        
        if(regex!==null){                                                                   // if regex is equal to null   MEANING IT HAS EXITED THE SWITCH STATEMENT WITH AN ERROR
            if(str.match(regex)===null){ //if there was a validation error
                //alert($(this).attr('name')+":"+error_msg); //send error message
                
                var error_span = $("<span/>").addClass('error_msg').text(error_msg);        // make a variable create a span add a class and the error message inside the tex
                error_span.insertAfter($(this));                                          // use jQuery insert after to insert the error_span after this
                
                //$(this).parent().find('.error_msg').html(error_msg);
                
                
                error_count++;  //increase error count                                      // If it gets to this if statement that means we have an error
            }
            
            
        }  // exit the if statement
    });  // for the each function
    
    
    console.log("error count " +error_count);
    if(error_count==0){                                                                     //if no errors
        send_message();                                                                     //trigger our form submission function
    }
    else {
        return false;                                                                       //return false, so that the form submit will fail
    }
    
}

var success_count = 0;
function send_message(){  //dummy function for sending message                              // if it reaches this point then we have succesfully acheived our function
    
    if(success_count == 1){
        console.log("This is the ",success_count);
        return
    }
    
    var succeed = $('<span>').text("Your message was sent successfully").css({color:'green', marginTop:'5px',border:'1px solid black'});
    console.log(succeed);
    
    succeed.insertAfter('button');
    console.log('to be continued...');
    
    success_count ++
    
    
}




