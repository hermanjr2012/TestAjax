$('#posting').click(function(){
    $.post("http://www.lifestimecapsule.com/ajax/authenticate", { "email": "hermanjr2010@gmail.com", "password": "xxx123", crossDomain: true })
     .success(function(data) { 
                var obj = eval('(' + data + ')');
                 alert(obj.message);
         })
     .fail(function (xhRequest, ErrorText, thrownError) { console.log(xhRequest.status + ', ' + ErrorText + ', ' + thrownError);});
});