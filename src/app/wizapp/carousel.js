var Carousel = function (el) {

	let carousel = this;

	carousel.element = $(el);
	carousel.currentSlide = 0;
	carousel.previouseSlide = 0;
	carousel.numberOfSlides = 0;

	carousel.timer = false;

	carousel.timerLength = 5000;

	carousel.timerPause = 10000;

	carousel.timing = false;

	carousel.changePosition = function(direction){

		if(carousel.timing) return;

		carousel.previouseSlide = carousel.currentSlide;

		if(direction === false) {
			carousel.currentSlide--;
		} else

		if(direction === true) {
			carousel.currentSlide++;
		} else

		{
			if(carousel.currentSlide<direction) {
				carousel.currentSlide = direction;

				return carousel.showPosition(true,true);
			
			} else if (carousel.currentSlide>direction) {
				carousel.currentSlide = direction;
				return carousel.showPosition(false,true);
			}
		}
		if(carousel.currentSlide == carousel.previouseSlide) return;

		if(carousel.currentSlide < 0){
			carousel.currentSlide = carousel.numberOfSlides-1;
		}  else if(carousel.currentSlide >= carousel.numberOfSlides){
		  	carousel.currentSlide = 0;
		  }

		  carousel.showPosition(direction,false);
		};


		carousel.showPosition = function(direction,placed){

			clearTimeout(carousel.changeTimer);
			carousel.changeTimer = false;

			let leftposition, rightposition;
			if(carousel.currentSlide == 0){
				leftposition =  carousel.currentSlide-1;
			} else leftposition = carousel.currentSlide-1;

			if(carousel.currentSlide == carousel.numberOfSlides-1){
				rightposition = 0;
			} else rightposition = carousel.currentSlide+1;

			let cs = carousel.element.find(".carousel-slide")
				.removeClass("atLeft atRight atCenter moving");

				cs.eq(carousel.previouseSlide).addClass("atCenter")
				if(direction===true){
					cs.eq(carousel.currentSlide).addClass("atRight");
					cs.eq(rightposition).addClass("atRight");
				} else if(direction===false){
					cs.eq(carousel.currentSlide).addClass("atLeft");
					cs.eq(leftposition).addClass("atLeft");
				}

				carousel.timing = true;

				carousel.changeTimer = setTimeout(function(){
					carousel.element.find(".carousel-paginate")
					.eq(carousel.currentSlide).addClass("active")
					.siblings().removeClass("active");
				cs.eq(carousel.currentSlide)
					.removeClass("atLeft atRight").addClass("moving atCenter");
				cs.eq(carousel.previouseSlide)
					.removeClass("atLeft atRight atCenter").addClass("moving at"+
						(direction===true ? "Left" : "Right"));


				setTimeout(function(){carousel.timing = false;},1000);

			},50);
		};

		carousel.startTimer = function(){
			if(carousel.timerLength === 0) return;
			carousel.timer = setInterval(carousel.tick, carousel.timerLength);
		};

		carousel.stopTimer = function(){
			clearInterval(carousel.timer);
			carousel.timer = false;
		};

		carousel.pauseTimer = function(){
			carousel.stopTimer();
			carousel.timer = setTimeout(carousel.startTimer, carousel.timerPause);
		};

		carousel.tick = function(){
			carousel.changePosition(true);
		};

		carousel.makeButtons = function(){

			let buttondiv = $("<div class='carousel-pagination'>");

			for(let i=0; i<carousel.numberOfSlides; i++) {
				let btn = $("<button class='carousel-paginate'>").html("&#x25cf;");
				if(i==0) btn.addClass("active");
				buttondiv.append(btn);
			}

			carousel.element.append(
				$("<div class='carousel-controls'>").append(buttondiv)
				);
			carousel.element.append(
				$("<div class='carousel-controlss'>").html(
					"<div class='carousel-control  carousel-control-left'><svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><polyline points='71.85 12.58 48.15 60 71.85 107.42' style='fill:none;stroke:#3C3C3C;stroke-miterlimit:10;stroke-width:4px'/></svg></div>"+
					"<div class='carousel-control carousel-control-right'><svg id='Layer_2' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><polyline points='48.15 12.58 71.85 60 48.15 107.42' style='fill:none;stroke:#3C3C3C;stroke-miterlimit:10;stroke-width:4px'/></svg></div>"
					)
				);
			};

		carousel.init = function(){

			if(carousel.element.data("timer")=="none") {
				carousel.timerLength = 0;
			} else if(carousel.element.data("timer")!=undefined) {
				carousel.timerLength = +carousel.element.data("timer")*1000;
			}
			carousel.timerPause = carousel.timerLength*2;

			carousel.numberOfSlides = carousel.element.find(".carousel-slide").length;

			carousel.element.find(".carousel-slide").eq(0).addClass("atCenter");

			carousel.makeButtons();

			carousel.startTimer();
		};

		carousel.element.on("click",".carousel-control",function(){
			carousel.changePosition($(this).is(".carousel-control-right"));
			carousel.pauseTimer();
		});
		carousel.element.on("click",".carousel-paginate", function() {
			carousel.changePosition($(this).index());
			carousel.pauseTimer();
		});

		carousel.init();
	}
module.exports = Carousel;