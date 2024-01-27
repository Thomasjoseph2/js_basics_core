(function(){
    var a = 10;
    (function(){
        console.log(a);
      var a = 20;
    })();
  })();
  