$(document).ready(function(){
var gameState;

   if (!gameState){
      gameState = {
         currentPage: 'beginning'
      };
   }

   function drawPage(){
      var page = zombieFakker[ gameState.currentPage];
      $("#page h2").text(page.title);
      $("#page img").attr("src", page.img);
      $("#bread").html(page.bread);
      $(".GameMenu ul").empty();
      page.options.forEach(function(link, n){
         var linkElem = $("<li></li>").text(link.text).attr("data-optNbr", n);
         $(".GameMenu ul").append(linkElem);
      });
   }

   $(".GameMenu ul").on("click", "li", function(){
      var optNbr = $(e.target).attr("data-optNbr");
      var page = zombieFakker[ gameState.currentPage];
      var optionData = page.options[optNbr];
      var target = optionData.to;
      gameState.currentPage = target;
      drawPage();
   });

   drawPage();

});

