$(function() {

   $(".settings-panel").height($(document).height()-70);

   $(".settings-panel #color-grove").click(function(){
      $("link#grove-styles").attr("href", "css/styles-blue.css");
      _gaq.push(['_trackEvent', 'Color Schemes', 'Switch', 'Grove']);
      return false;
   });

   $(".settings-panel #color-clean").click(function(){
      $("link#grove-styles").attr("href", "css/styles-cleanblue.css");
      _gaq.push(['_trackEvent', 'Color Schemes', 'Switch', 'Clean Blue']);
      return false;
   });

   $(".settings-panel #color-aqua").click(function(){
      $("link#grove-styles").attr("href", "css/styles-aqua.css");
      _gaq.push(['_trackEvent', 'Color Schemes', 'Switch', 'Aqua']);
      return false;
   });


   $(".settings-toggle #toggle").click(function(){
      $(".settings-panel").fadeToggle({duration:400});
      
      if ($(".settings-toggle").hasClass('toggled') === false) {
         $(".settings-toggle").addClass("toggled").children(".glyphicons").removeClass("tint").addClass("remove_2");
         _gaq.push(['_trackEvent', 'Settings Panel', 'Open']);
      } else {
         $(".settings-toggle").removeClass("toggled").children(".glyphicons").addClass("tint").removeClass("remove_2");
         _gaq.push(['_trackEvent', 'Settings Panel', 'Close']);
      }

      return false;
   });
});


// $(document).mouseup(function (e)
// {
//     var container = $(".settings-panel");
//     var toggler = $(".settings-toggle #toggle");

//     if (!container.is(e.target) && !toggler.is(e.target) && container.has(e.target).length === 0)
//     {
//         container.hide();
//     }
// });