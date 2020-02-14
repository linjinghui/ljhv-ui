;(function() {
	var isIE = window.navigator.userAgent.indexOf('Trident') > -1;
	var opts = {
		imgurl: '',
		cw: 60,
		ch: 60,
		precision: 5,
		onSuccess: null,
		onError: null,
		eventinfo: {
			flag: false,
			left: 0,
			clipleft: 0,
			currentX: 0
		}
	}

	function isArray(obj) { 
		return Object.prototype.toString.call(obj) === '[object Array]'; 
	} 

	function createCaptchaBox(canvas) {
		var captchaBox = document.createElement('div');
		captchaBox.className = "captcha-box";
		captchaBox.style.width = canvas.width + 'px';

		var canvasBox = document.createElement('div');
		canvasBox.className = "canvas-box";
		canvasBox.appendChild(canvas.cloneNode(true));
		canvasBox.appendChild(createResult());

		captchaBox.appendChild(canvasBox);
		captchaBox.appendChild(createDragBar());
		canvas.parentNode.replaceChild(captchaBox, canvas);
		return captchaBox;
	}

	function createDragBar() {
		var dragbar = document.createElement('div');
		dragbar.className = "captcha-dragbar";
		dragbar.innerHTML = '<div class="drag-track"></div><div id="drag-slider" class="drag-slider"></div><div class="drag-btn"><i id="drag-btn-close" class="close"></i><i id="drag-btn-refresh" class="refresh"></i></div>'
		return dragbar;
	}

	function createResult() {
		var result = document.createElement('div');
		result.id = 'captcha-result';
		result.className = "captcha-result";
		return result;
	}

	function createCanvas(w, h) {
		var canvas = document.createElement("canvas"); 
	    canvas.width = w;
	    canvas.height = h;
	    return canvas;
	}

	function clipPath(ctx, startx, starty) {
		startx = startx + 0.2;
	    starty = starty + 0.2;

	    var subw = parseInt((opts.cw - 1) / 6),
	    	subh = parseInt((opts.ch - 1) / 6),
	    	radius = Math.min(subw, subh),
	    	clipw = subw * 5 + 0.5,
	    	cliph = subh * 5 + 0.5;

	    ctx.beginPath()
	    ctx.moveTo(startx, starty);
	    ctx.lineTo(startx + clipw, starty);
	    ctx.lineTo(startx + clipw, starty + parseInt(cliph / 2) - radius);
	    ctx.arc(startx + clipw, starty + parseInt(cliph / 2), radius, -Math.PI / 2, Math.PI / 2, false);
	    ctx.lineTo(startx + clipw, starty + cliph);
	    ctx.lineTo(startx + clipw - (parseInt(clipw / 2) - radius), starty + cliph);
	    ctx.arc(startx + parseInt(clipw / 2), starty + cliph, radius, 0, Math.PI, false);
	    ctx.lineTo(startx, starty + cliph);
	    ctx.lineTo(startx, starty);
	    ctx.closePath();
	}

	function fillClip(canvas, startx, starty, alpha) {
		var ctx = canvas.getContext('2d')
		clipPath(ctx, startx, starty);
		
		ctx.fillStyle = "rgba(0,0,0, " + alpha + ")";
	    ctx.fill();
	}

	function strokeClip(canvas, startx, starty) {
		var ctx = canvas.getContext('2d');
		clipPath(ctx, startx, starty);
		
		ctx.strokeStyle = "#fff";
	    ctx.stroke();
	}
	
	function randomNum(min, max){
      var rangeNum = max - min;
      var num = min + Math.round(Math.random() * rangeNum);
      return num;
	}
	
	function getStartPoint(w, h) {
		var padding = 10,
			startw = opts.cw + padding,
			starth = opts.ch + padding;
		if (w < startw * 2 || h < starth) return;	
		
		var startPoint = {
			startx: randomNum(startw, w - startw),
			starty: randomNum(padding, h - starth)
		};
		return startPoint;
	}

	function eventInit(startx) {
		var slider = document.getElementById('drag-slider'),
			sliderWidth = slider.offsetWidth,
			track = document.querySelector('.drag-track'),
			trackWidth = track.offsetWidth,
			clipcanvas = document.getElementById('captcha-clipcanvas'),
			btnClose = document.getElementById('drag-btn-close'),
			btnRefresh = document.getElementById('drag-btn-refresh'),
			result = document.getElementById('captcha-result'),
			resultClass = result.className;

		opts.eventinfo.left = parseFloat(getComputedStyle(slider, null).getPropertyValue('left'));
		opts.eventinfo.clipleft = parseFloat(getComputedStyle(clipcanvas, null).getPropertyValue('left'));

		var close = function() {
			// alert('close');
		}
		var refresh = function() {
			// alert('refresh');
		}
		var reset = function() {
			var boxClassName = window.captchaBox.className;

			window.captchaBox.className += ' shake';

			setTimeout(function(){
				slider.style.left = "0px";
				clipcanvas.style.left = "10px";

				opts.eventinfo.left = 0;
				opts.eventinfo.clipleft = 10;
			}, 500)
			setTimeout( function(){
				result.className = resultClass;
				window.captchaBox.className = boxClassName;
			}, 1500)
		}

		var moveStart = function(e){
			opts.eventinfo.flag = true;
			if (e.touches) {
				opts.eventinfo.currentX = e.touches[0].clientX;	
			} else {
				opts.eventinfo.currentX = e.clientX;	
			}
		}
		var move = function(e) {
			if (opts.eventinfo.flag){
				if (e.touches) {
					var disX = e.touches[0].clientX - opts.eventinfo.currentX;
				} else {
					var disX = e.clientX - opts.eventinfo.currentX;
				}
				if (disX >= 0 && disX < trackWidth - sliderWidth) {
					slider.style.left = opts.eventinfo.left + disX + "px";
					clipcanvas.style.left = opts.eventinfo.clipleft + disX + "px";
				}
				// slider.style.left = opts.eventinfo.left + disX + "px";
				// clipcanvas.style.left = opts.eventinfo.clipleft + disX + "px";

				if (e.preventDefault) e.preventDefault();
				return false;
			}
		}
		var moveEnd = function(e) {
			if (opts.eventinfo.flag){
				opts.eventinfo.flag = false;
				opts.eventinfo.left = parseFloat(getComputedStyle(slider, null).getPropertyValue('left'));
				opts.eventinfo.clipleft = parseFloat(getComputedStyle(clipcanvas, null).getPropertyValue('left'));

				if (Math.abs(startx - opts.eventinfo.left) <= opts.precision) {
					result.innerHTML = '验证通过';
					result.className = resultClass + ' success';
					opts.onSuccess && opts.onSuccess();
				} else {
					result.innerHTML = '拖动滑块将悬浮图像正确拼合';
					result.className = resultClass + ' fail';

					reset();
					opts.onError && opts.onError();
				}
			}
		}

		slider.addEventListener("touchstart", moveStart);
		slider.addEventListener("mousedown", moveStart);
		// slider.addEventListener("touchmove", move);
		// slider.addEventListener("mousemove", move);
		slider.parentNode.addEventListener("touchmove", move);
		slider.parentNode.addEventListener("mousemove", move);
		document.addEventListener('touchend', moveEnd);
		document.addEventListener('mouseup', moveEnd);
		btnClose.addEventListener("click", close);
		btnRefresh.addEventListener("click", refresh);
	}

	var imgCaptcha = function(canvas, options) {
		for(var k in options) {
			if(options.hasOwnProperty(k)) {
				opts[k] = options[k];
			}
		}

		if(!canvas || !opts.imgurl) {
			console.error("verify params is error");
			return;
		}
		if(typeof canvas === 'string') canvas = document.getElementById(canvas);
		if(canvas.tagName !== 'CANVAS') {
			console.error("param canvas must be canvas");
			return;
		}

		window.captchaBox = createCaptchaBox(canvas);
		canvas = captchaBox.children[0].children[0];
		canvas.className += canvas.className + ' captcha-bg';

		var img = new Image();
		img.crossOrigin = 'Anonymous';
		img.onload = function() {
			var w = canvas.width,
				h = canvas.height;

			var startPoint = getStartPoint(w, h)
    		if (!startPoint) {
    			console.error("can not get the start point");
    			return 
    		}
    		var startx = startPoint.startx,
				starty = startPoint.starty;

			canvas.getContext('2d').drawImage(img, 0, 0, w, h);
			fillClip(canvas, startx, starty, 0.7);
			
	    	var sourceCanvas = createCanvas(w, h);
			var sctx = sourceCanvas.getContext('2d'); 
			sctx.drawImage(img, 0, 0, w, h);
			sctx.globalCompositeOperation = 'destination-in';

			var destCanvas = createCanvas(opts.cw, opts.ch);
			fillClip(destCanvas, 0, 0, 1);

			sctx.drawImage(destCanvas, startx, starty);
				
			var clipCanvas = createCanvas(opts.cw, opts.ch);
			clipCanvas.id = 'captcha-clipcanvas';
			clipCanvas.className = 'captcha-clipcanvas';
			clipCanvas.getContext('2d').putImageData(sctx.getImageData(startx, starty, opts.cw, opts.ch), 0, 0);

			strokeClip(clipCanvas, 0, 0);
			
			// clipCanvas.style.top = starty + 'px';
			clipCanvas.style.top = (starty + 10) + 'px';
			captchaBox.appendChild(clipCanvas);

			eventInit(startx);
		}

		opts.imgurl = isArray(opts.imgurl) ? opts.imgurl : [opts.imgurl];

		var urlIndex = Math.floor(Math.random() * opts.imgurl.length);
		var imgurl = opts.imgurl[urlIndex];
		var setsrc = function (src) {
			if (isIE) {
				// IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
				var xhr = new XMLHttpRequest()
				xhr.onloadend = function (e) {
					var file = new FileReader() // FileReader仅支持IE10+
					file.readAsDataURL(e.target.response)
					file.onloadend = function (e) {
				  		img.src = e.target.result
					}
			  	}
			  	xhr.open('GET', src)
			  	xhr.responseType = 'blob'
			  	xhr.send()
			}
			else img.src = src
		}
		setsrc(imgurl);
		// img.src = imgurl;
	}


	if(typeof exports == "object") {
		module.exports = imgCaptcha
	} else if(typeof define == "function" && define.amd) {
		define([], function() {
			return imgCaptcha
		})
	} else if(window) {
		window.imgCaptcha = imgCaptcha
	}
})()