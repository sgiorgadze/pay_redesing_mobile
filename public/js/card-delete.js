document.querySelector(".toggle_btn_green").onclick= function(){
  document.querySelector(".sms_turnOn").style.display="none";
  document.querySelector(".sms_turnOff").style.display="flex"
};




document.querySelector(".close").onclick = function(){  
    document.querySelector(".card_pay").style.display="none";
    document.querySelector(".delete_card_form ").style.display="flex";
   
}

document.querySelector(".cards_confirm_button").onclick= function() {
  
 if (document.querySelector(".delete_input").value != 0){
   console.log(1);
        document.querySelector(".card_form_confirm").classList.add("card_attantion");
    }
     if (document.querySelector(".delete_input").value == 1){
          document.querySelector(".delete_card_form ").style.display="none";
        document.querySelector(".card_delete_successful").style.display="flex";
    }
     if (document.querySelector(".delete_input").value == 2){      
          document.querySelector(".delete_card_form ").style.display="none";
        document.querySelector(".card_delete_unsuccessful").style.display="flex";
    }
}


let acc2= document.getElementsByClassName("collapsible_head");


let i;

function collapsible(arr){
for (i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function(event) {    
event.target.parentNode.parentNode.parentNode.classList.toggle("active");     
  });
};
}
collapsible(acc2);



document.querySelector(".dropdown_menu").onclick= function(){
  document.querySelector(".dropdown_menu").classList.toggle("show_dropdown");
  document.querySelector(".collapsible_body_top_block").classList.toggle("collapsible_body--border")
}

document.querySelector(".collapsible_body_replenish_button").onclick= function(){
  if (document.querySelector(".collapsible_body-input").value !=0) {
    document.querySelector(".collapsible_body_middle_block").classList.add("incorrect-amount");
  }
}