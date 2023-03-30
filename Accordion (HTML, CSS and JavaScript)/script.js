let container=document.querySelector(".accordion_wrapper");
let arrow=document.querySelectorAll(".status_arrow")

arrow.forEach(function(el){
  el.addEventListener("click",function(event){
    event.target.classList.toggle("arrow_down");
    let content=el.parentElement.nextElementSibling; //we are in foreach in arrows and from arrow the parentelements nextelement sibling is the content
    content.classList.toggle("hidden")

  })

});


  
  
