
// var totalDifference = 0;
      $("#submit").on("click", function(event) {
        event.preventDefault();
      
        function formValidation() {
          var isValid = true;
          $(".form-control").each(function() {
            if ($(this).val() === "") {
              isValid = false;
            }
          });
  
          $(".userChoice").each(function() {
  
            if ($(this).val() === "") {
              isValid = false;
            }
          });
          return isValid;
        }
    
        if (formValidation()) {
          // Create an object for the user"s data
          var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
              $("#question1").val(),
              $("#question2").val(),
              $("#question3").val(),
              $("#question4").val(),
              $("#question5").val(),
              $("#question6").val(),
              $("#question7").val(),
              $("#question8").val(),
              $("#question9").val(),
              $("#question10").val()
            ]
          };
          
         //calculate total difference using math.abs and generate matches 
          for (var i = 0; i < userData.length; i++)
          {
            var C = [];
  for(let i = 0; i < A.length; i++) {
    C.push(Math.abs(userData[i] - tableArray[i]));
    console.log(tableArray); 
}
            
            }
    
          // AJAX post to the friends API.
          $.post("/api/friend", userData, function(data) {
  
            // Grab users match
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
  
            // Show the character who matches closest
            $("#results-modal").modal("toggle");
  
          });
        }
     
        else {
          alert("Please fill out all fields before submitting!");
        }
      });