$(function() {
  
        $.ajax({
          type:'GET'
            url: '/http http://swapi.co/api/starships/',

            success:function(data){
          console.log('success',data);
        }
            
           });
});
