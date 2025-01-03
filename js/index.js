$(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(1000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
    
    var setView = function(view) { universe.removeClass().addClass(view); };
  
    $("#toggle-controls").click(function(e) {
      body.toggleClass("controls-open controls-close");
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  
    init();
  
  });