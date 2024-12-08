document.getElementById("submit-cont-form").addEventListener("submit" , function(e){
    e.preventDefault()
    var fullname = document.getElementById("fullname").value
    document.getElementById("submit-cont-form").reset();
    alert(`Hey ${fullname} Your Submission has been register successfully`)

   });


