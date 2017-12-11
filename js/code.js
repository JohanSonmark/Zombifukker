$(document).ready(function(){
var gameState;

   if (!gameState){
      gameState = {
         currentPage: 'beginning'
      };
   }

   $("#reset").on("click", function(){
       gameState = {
           currentPage: 'beginning'
       };
       drawPage(zombieFakker);
   })

   function drawPage(bla){
      var page = bla[ gameState.currentPage];
      $("#page h2").text(page.title);
      $("#page img").attr("src", page.img);
      $("#bread").html(page.bread);
      $("#choice").text(page.choice);
      $(".GameMenu ul").empty();
      page.options.forEach(function(link, n){
         var linkElem = $("<li></li>").text(link.text).attr("data-optNbr", n);
         $(".GameMenu ul").append(linkElem);
      });
   }

   $(".GameMenu ul").on("click", "li", function(e){
      var optNbr = $(e.target).attr("data-optNbr");
      var page = zombieFakker[ gameState.currentPage];
      var optionData = page.options[optNbr];
      var target = optionData.to;
      if (target === "boom"){
          gameState.currentPage = "woodAxe";
         drawPage(stuffs);
      }
      gameState.currentPage = target;
      drawPage(zombieFakker);
   });

   function chooseStuffs(){

   }

   drawPage(zombieFakker);

});

