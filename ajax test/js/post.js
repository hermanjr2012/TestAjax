$('#posting').click(function(){
    $.post("http://www.wiscribe.com/ajax/authenticate", { "email": "hermanjr2010@gmail.com", "password": "xxx123", crossDomain: true })
     .success(function(data) { 
                var obj = eval('(' + data + ')');
                 alert(obj.message);
             console.log(obj.cookie);
         })
     .fail(function (xhRequest, ErrorText, thrownError) { console.log(xhRequest.status + ', ' + ErrorText + ', ' + thrownError);});
});


//$('#uid').click(function(){

//$.post("http://www.lifestimecapsule.com/ajax/retrieve/profile", { crossDomain: true })
//        .success(function(data) { 
//            var obj = eval('(' + data + ')'); 
            
//            if ( obj.type == 'success' ) {
//                //usrObj = obj;
//                //storeThis(usrObjID,obj);
                
//                //toastr.success('Enjoy!','Login Success');
//                //hideLogin(2000);
//                //userDataRefreshTimer = setTimeout('doProfileRefresh()',15000);
//                console.log(data);
//            } else { 
//                toastr.error('Login error: Check your signal strength and try again in a few moments.','Login Error');
//            }

//        })
//        .fail(function (xhRequest, ErrorText, thrownError) { console.log(xhRequest.status + ', ' + ErrorText + ', ' + thrownError); });
//    });

$('#testupload').click(function(){
     $.post("http://www.wiscribe.com/ajax/upload", { "title": "ipdad ajax test", "content": "askdmsfjgsdfklmdfjklmgdfg", "media": 'journal', crossDomain: true })
                    .success(function(data) { 
                        console.log(data);
                    })
                    .fail(function (xhRequest, ErrorText, thrownError) { console.log(xhRequest.status + ', ' + ErrorText + ', ' + thrownError); });
});


var input = document.querySelector('input[type=file]'); // see Example 4

input.onchange = function () {
  var file = input.files[0];

  upload(file);
  drawOnCanvas(file);   // see Example 6
  displayAsImage(file); // see Example 7
};

function upload(file) {
  var form = new FormData(),
      xhr = new XMLHttpRequest();

  form.append('video', file);
  xhr.open('post', 'http://www.wiscribe.com/ajax/upload', true);
  xhr.send(form);
}