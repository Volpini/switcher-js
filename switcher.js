jQuery.fn.switcher = function(){
    return this.each(function(){
		var switcher = $(this);
		switcher.val(1);
        switcher.wrap("<div class='switch-container' />");

		var div_mae = switcher.parent();
		div_mae.prepend("<div class='switch-background'><a href='' class='btn btn-success button-switch'>&nbsp;</a><p class='desc-switch desc-switch-on'>ON</p></div>");
		var switch_btn = div_mae.find(".button-switch");
		var desc_switch = div_mae.find(".desc-switch");
		switcher.css({
			"visibility": "hidden",
			"marginTop": "-20px",
			"marginLeft": "10px"
		})
		
		div_mae.toggle(function(){
			switcher.attr("checked", true)
			console.log(div_mae.width());
			console.log(switch_btn.width());
			switch_btn.animate({
			      marginLeft: "46px" 
			    }, "fast");
			desc_switch.removeClass("desc-switch-on");
			desc_switch.addClass("desc-switch-off");
			desc_switch.html("OFF");
			switch_btn.removeClass("btn-success");
			switch_btn.addClass("btn-danger");

		}, function(){
			switcher.attr("checked", false)
			switch_btn.animate({
			      marginLeft: "0px"
			    }, "fast");
			desc_switch.removeClass("desc-switch-off");
			desc_switch.addClass("desc-switch-on");
			desc_switch.html("ON");
			switch_btn.removeClass("btn-danger");
			switch_btn.addClass("btn-success");
		})
		
    });
};