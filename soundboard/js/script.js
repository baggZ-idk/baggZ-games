$(document).ready(function(){
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#doc").append($('<button class="btn '+audio.attr("class")+'" title="'+audio.attr("title")+'">'+audio.attr("title")+'</button>').click(function() {that.play();}));
	});


$("audio").bind("play",function (){
  $("audio").not(this).each(function (index, audio) {
    audio.pause();
	audio.currentTime = 0;
  });
});

});





