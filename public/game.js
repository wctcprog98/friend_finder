
  
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
          
          console.log(userData); 
          // AJAX post to the friends API.
          $.post("", userData, function(data) {
  
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