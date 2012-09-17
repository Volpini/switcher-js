(function($){
	$.fn.switcher = function(settings){
		
		var defaultOptions = {
			'onButtonClass': 'btn-sucess',
			'offButtonClass' : 'btn-danger',
			'onButtonText' : 'ON',
			'offButtonText' : 'OFF',
			'defaultChecked' : true,
			'animationSpeed' : 'fast',
			'width' : '80' 
		};
		
		if (settings){$.extend(defaultOptions, settings);}
		
		return this.each(function(){
			var switcher = $(this);
	        switcher.wrap("<div class='switch-container' />");
	
			var div_mae = switcher.parent();
			if(defaultOptions.defaultChecked){
				switcher.attr("checked", true);
				div_mae.prepend("<div class='switch-background'><span class='btn "+defaultOptions.onButtonClass+" button-switch'>&nbsp;</span><p unselectable='on' class='desc-switch desc-switch-on'>"+defaultOptions.onButtonText+"</p></div>");
			}else{
				div_mae.prepend("<div class='switch-background'><span class='btn "+defaultOptions.offButtonClass+" button-switch'>&nbsp;</span><p unselectable='on' class='desc-switch desc-switch-off'>"+defaultOptions.offButtonText+"</p></div>");
				div_mae.find(".button-switch").css("float", "right");
			}
			var switch_btn = div_mae.find(".button-switch");
			var desc_switch = div_mae.find(".desc-switch");
			switcher.css({
				"visibility": "hidden",
				"marginTop": "-20px",
				"marginLeft": "10px",
				"width" : defaultOptions.width
			});
			
			$(".switch-background").css({"width" : defaultOptions.width});
			
			div_mae.click(function(e){								
				if(switcher.attr("checked")){
					switcher.attr("checked", false);
					switch_btn.css("float", "right");
					desc_switch.removeClass("desc-switch-on");
					desc_switch.addClass("desc-switch-off");
					desc_switch.html(defaultOptions.offButtonText);
					switch_btn.removeClass(defaultOptions.onButtonClass);
					switch_btn.addClass(defaultOptions.offButtonClass);
				}else{
					switcher.attr("checked", true)					
					switch_btn.css("float", "left");
					desc_switch.removeClass("desc-switch-off");
					desc_switch.addClass("desc-switch-on");
					desc_switch.html(defaultOptions.onButtonText);
					switch_btn.removeClass(defaultOptions.offButtonClass);
					switch_btn.addClass(defaultOptions.onButtonClass);					
				}
			});
		});
	};
})(jQuery);