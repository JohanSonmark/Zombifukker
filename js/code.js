$(document).ready(function(){
var gameState;
var object;
var attack = 0;
var defence = 0;
var survival = 0;
var navigation = 0;
var slots = 6;

   if (!gameState){
       object = zombies;
      gameState = {
         currentPage: 'beginning'
      };
   }

   $("#reset").on("click", function(){
       gameState = {
           currentPage: 'beginning'
       };
       attack = 0;
       defence = 0;
       survival = 0;
       navigation = 0;
       slots = 6;
       object = zombies;
       drawPage(object);
   });

    //Retrieves data from data.js and draws it into the html-page.
    //Also puts content into the UL with a loop.
   function drawPage(object){
      var page = object[ gameState.currentPage];
      $("#page h2").text(page.title);
      $("#page img").attr("src", page.img);
      $("#bread").html(page.bread);
      $("#choice").text(page.choice);
      $(".GameMenu ul").empty(); //Empties the list between clicks...
      page.options.forEach(function(link, n){ //...and then draws new content to it.
         var linkElem = $("<li></li>").text(link.text).attr("data-optNbr", n);
         $(".GameMenu ul").append(linkElem);
      });
   }

       $(".GameMenu ul").on("click", "li", function(e){
          debugger;
            if (gameState.currentPage === 'rucksack'){
               gameState.currentPage = 'woodAxe';
               object = stuffs;
               drawPage(object);
            }
           else if (object === stuffs){
               var optNbr2 = $(e.target).attr("data-optNbr");
               var page2 = stuffs[ gameState.currentPage];
               var optionData2 = page2.options[optNbr2];
               var target2 = optionData2.to;
               var yesPls = optionData2.text;
               if(yesPls === "Yes"){
                   attack += page2.attack;
                   defence += page2.defence;
                   survival += page2.survival;
                   navigation += page2.navigation;
                   slots -= page2.slots;
               }
                alert("Attack: "+attack+"___Defence: "+defence+"___Survival: "+survival+"___Navigation: "+navigation);
               alert("Slots left: " + slots);
               gameState.currentPage = target2;
               drawPage(object);
           }
           console.log(gameState.currentPage);
       var optNbr = $(e.target).attr("data-optNbr");
       var page = zombies[ gameState.currentPage];
       var optionData = page.options[optNbr];
       var target = optionData.to;
       gameState.currentPage = target;
      drawPage(object);
   });

   drawPage(object);

});

