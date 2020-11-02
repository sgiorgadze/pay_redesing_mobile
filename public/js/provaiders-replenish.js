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

document.querySelector(".collapsible_body_replenish_button").onclick= function(){
  if (document.querySelector(".collapsible_body-input").value !=0) {
    document.querySelector(".collapsible_body_middle_block").classList.add("incorrect-amount");
  }
}