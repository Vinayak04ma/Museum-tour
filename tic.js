

document.getElementById("ticketForm").addEventListener("submit", function(event) {
    
   
  setTimeout(()=>{
    window.location.href = "success.html";
  
    document.getElementById("ticketForm").reset();
   
  },1000)

});

