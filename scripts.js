$(function() {
  
        $.ajax({
          type:'GET'
            url:'http://swapi.co/api/starships/9/',

            success:function(data){
          console.log('success',data);
        }
            
           });
});
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").load("data.json");
    });
});
