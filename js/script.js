$("#cardForm").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    console.log(form.serialize());
    $.ajax({
           type: "POST",
           url: "send.php",
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
               alert(data); // show response from the php script.
           },
            error: function (data) {
                console.log('An error occurred.');
            },
         });    
});
