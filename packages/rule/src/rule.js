/**
 * @param	maxNum 传入最大数字
 * @param	minNum 传入最小刻度数字
 * @param	stepNum 每一个刻度代表多少数字
 * @param	stepWidth 每一个刻度的宽
 * @param setSliderItemNum 初始化刻度尺刻度数量以及适时滑动增加的固定数量，防止大数据造成for循环过多造成浏览器崩溃,小于1000
 * @param	sliderItemStep 每隔多少隔显示长刻度
 * @param	sliderItemValueIsHidden 短刻度下面的标度是否显示
 * @param	sliderItemLongValueIsHidden 长刻度下面的标度是否显示
 * @param	sliderItemValueTextAlign 设置标度居中方式
 * @param	sliderGuide 设置指针是否显示
 * @param	setMaxNum 最大刻度数字
 * @param	setMinNum 最小刻度数字
 * @param animatedClassName 刻度尺动画
 * @param	unit 单位
 * @param	callBack 回调函数
 **/
(function(){
	var Ruler = function(options){
		this.id = options.id;
		this.getObj = document.getElementById(options.id);
		this.getPobj = this.getObj.parentNode || this.getObj.parentElement;
		this.maxNum = options.maxNum;
		this.minNum = options.minNum;
		this.stepNum = options.stepNum;
		this.stepWidth = options.stepWidth;
		this.setSliderItemNum = options.setSliderItemNum;
		this.sliderItemStep = options.sliderItemStep;
		this.sliderItemValueIsHidden = options.sliderItemValueIsHidden;
		this.sliderItemLongValueIsHidden = options.sliderItemLongValueIsHidden;
		this.sliderItemValueTextAlign = options.sliderItemValueTextAlign;
		this.sliderGuide = options.sliderGuide;
		this.animatedClassName = options.animatedClassName || '';
		this.unit = options.unit || '';
		this.callBack = options.callBack;
		this.setMaxNum = Math.ceil((this.maxNum - this.minNum)/this.stepNum) * this.stepNum + this.minNum;
		this.setMinNum = this.minNum;
		this.getSliderGuideLeftDeviation = 0;
		this.initClassName = this.getObj.className;
		this.forIndex = 1;
		this.startPageX;
		this.startLeft;
		this.movePageX;
		this.moveX;
		this.init();
	}
	Ruler.prototype = {
		init: function(){
			this.getAllSliderItemNum = (this.setMaxNum - this.setMinNum)/this.stepNum;//滑尺刻度总个数
			this.setSliderItemNum = this.setSliderItemNum >= Math.ceil(this.getPobj.offsetWidth/this.stepWidth)?this.setSliderItemNum : Math.ceil(this.getPobj.offsetWidth/this.stepWidth);//初始化滑尺个数是否沾满一屏，否的话设置
			this.setSliderGuide();
			this.initSlider();
		},
		initSlider: function(){
			var that = this;
			var getSliderItemNum = that.setSliderItemNum > that.getAllSliderItemNum?that.getAllSliderItemNum:that.setSliderItemNum;//滑尺刻度总个数
			var setObjWidth = that.stepWidth * that.getAllSliderItemNum;//滑尺总宽度
			var sliderItemLeft;//每个刻度的left
			var sliderItemValue;//每个刻度代表的value
			var strHtml = '';
			var spanAllHtml = '';
			that.getObj.style.width = setObjWidth + 'px';
			that.getObj.style.left = that.getSliderGuideLeftDeviation + 'px';
			for(var i = 0; i<=getSliderItemNum; i++){
				sliderItemLeft = that.stepWidth * i;
				sliderItemValue = that.setMinNum + that.stepNum * i;
				if(i%that.sliderItemStep === 0){
					strHtml = '<span class="slider-item-long" data-index="'+ i +'" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;"></span>';
					strHtml += that.sliderItemLongValueIsHidden?'<span class="slider-item-value" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;">'+ sliderItemValue + that.unit +'</span>':'';
				}else{
					strHtml = '<span class="slider-item" data-index="'+ i +'" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;"></span>';
					strHtml += that.sliderItemValueIsHidden?'<span class="slider-item-value" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;">'+ sliderItemValue + that.unit +'</span>':'';
				}
				spanAllHtml = spanAllHtml + strHtml;
			}
			that.getObj.innerHTML = '<div class="slider-item-box" id="sliderItemBox">'+ spanAllHtml +'</div>';
			that.setSliderGuideBorderBottom(setObjWidth);
			that.setSliderGuideDataValue();
			that.setSliderItemValueTextAlign();
			that.touch();
		},
		loadMoreSlider: function(){
			var that = this;
			var getBodyWidth = this.getPobj.offsetWidth;
			var getSliderIndex = Math.round((getBodyWidth/2-that.getObj.offsetLeft)/that.stepWidth);
			var getSliderItemNum = that.setSliderItemNum;
        // sliderItemBox = document.getElementById('sliderItemBox'),
      var sliderItemBox = that.getObj.querySelector('#sliderItemBox');
			var sliderItemIndex;//新增的每个刻度代表的index
			var sliderItemLeft;//新增的每个刻度的left
			var sliderItemValue;//新增的每个刻度代表的value
			var strHtml = '';
			var spanAllHtml = sliderItemBox.innerHTML;
			var startIndex = that.forIndex * getSliderItemNum;

			if(getSliderIndex >= (getSliderItemNum * (that.forIndex-1) + Math.round(getSliderItemNum/2))){
				for(var i = 1; i<=getSliderItemNum; i++){
					sliderItemIndex = i + getSliderItemNum * that.forIndex;
					sliderItemLeft = that.stepWidth * sliderItemIndex;
					sliderItemValue = that.setMinNum + that.stepNum * sliderItemIndex;
					
					if(sliderItemValue <= that.setMaxNum){
						if(i%that.sliderItemStep === 0){
							strHtml = '<span class="slider-item-long" data-index="'+ sliderItemIndex +'" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;"></span>';
							strHtml += that.sliderItemLongValueIsHidden?'<span class="slider-item-value" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;">'+ sliderItemValue + that.unit +'</span>':'';
						}else{
							strHtml = '<span class="slider-item" data-index="'+ sliderItemIndex +'" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;"></span>';
							strHtml += that.sliderItemValueIsHidden?'<span class="slider-item-value" data-value="'+ sliderItemValue +'" style="left: '+ sliderItemLeft +'px;">'+ sliderItemValue + that.unit +'</span>':'';
						}
						spanAllHtml = spanAllHtml + strHtml;
					}
				}
				that.forIndex += 1;
				sliderItemBox.innerHTML = spanAllHtml;
				that.setSliderItemValueTextAlign();
			}
		},
		setSliderGuideBorderBottom: function(width){
			var that = this;
			var setBorderBottom = width;
			var creatBorderHtml = document.createElement('div');
        // getHtml = document.getElementsByClassName('slider-border-bottom')[0];
      var getHtml = that.getObj.querySelector('.slider-border-bottom');
			creatBorderHtml.classList.add('slider-border-bottom');
			creatBorderHtml.style.width = setBorderBottom + 'px';
			creatBorderHtml.style.top = that.getObj.offsetTop + that.getObj.offsetHeight + 'px';
			creatBorderHtml.style.left = 0 + 'px';
			that.getObj.parentNode.appendChild(creatBorderHtml);
		},
		setSliderGuide: function(){
			var that = this;
			if(that.sliderGuide){
				var getBodyWidth = this.getPobj.offsetWidth;
				var getObjTop = that.getObj.offsetTop;
				var creatGuideHtml = document.createElement('div');
				creatGuideHtml.classList.add('slider-guide');
				creatGuideHtml.id="sliderGuide";
				creatGuideHtml.setAttribute('data-value','');
				that.getObj.parentNode.appendChild(creatGuideHtml);
        var getSliderGuideDom = creatGuideHtml,       
					getSliderGuideDomHeight = getSliderGuideDom.offsetHeight;
				that.getSliderGuideLeftDeviation = (getBodyWidth/2)%that.stepWidth;
				getSliderGuideDom.style.top = getObjTop - getSliderGuideDomHeight + that.getObj.offsetHeight + 'px';
				getSliderGuideDom.style.left = getBodyWidth/2 + 'px';
			}
		},
		setSliderGuideDataValue: function(value){
			var that = this;
      var getBodyWidth = this.getPobj.offsetWidth;
      // var getSliderGuideDom = document.getElementById('sliderGuide');
      var parent = that.getObj.parentNode || that.getObj.parentElement;
      var getSliderGuideDom = parent.querySelector('#sliderGuide');
        
      if(!(value) && value != 0){
        /*初始化指针指向的value*/
        value = parseInt(getBodyWidth/2/that.stepWidth) * that.stepNum + that.setMinNum;
			}
			
			value = parseFloat(value.toFixed(2));
			getSliderGuideDom.setAttribute('data-value',value);
			// that.callBack(value);
			setTimeout(function () {
				that.callBack.call(that, value)
			}, 300);
		},
		setSliderItemValueTextAlign: function(){
			var that = this;
        // getItemAll = document.getElementsByClassName('slider-item-value'),
      var getItemAll = that.getObj.getElementsByClassName('slider-item-value');
			var getItemWidth;
			if(getItemAll && getItemAll.length > 0){
				for(var i=0,len=getItemAll.length; i<len; i++){
					getItemWidth = getItemAll[i].offsetWidth;
					switch(that.sliderItemValueTextAlign){
						case 'center':
							getItemAll[i].style.marginLeft = -getItemWidth/2 + 'px';
							break;
						case 'right':
							getItemAll[i].style.marginLeft = -getItemWidth + 'px';
							break;
						case 'left':
							getItemAll[i].style.marginLeft = 0 + 'px';
							break;
					}
				}
			}
		},
		touch: function(){
			var that = this;
			that.getObj.addEventListener('touchstart',function(e){
				e.preventDefault();
				e.stopPropagation();
				var startTouch = e.changedTouches[0];
				that.startPageX = startTouch.pageX;
				that.startLeft = this.offsetLeft;
				this.className = that.initClassName;
			},false)

			that.getObj.addEventListener('touchmove',function(e){
				e.preventDefault();
				e.stopPropagation();
				var moveTouch = e.changedTouches[0],
					getBodyWidth = that.getPobj.offsetWidth,
					left;
				that.movePageX = moveTouch.pageX;
				that.moveX = that.movePageX - that.startPageX;
				left = that.startLeft + that.moveX;
				var sliderMoveStopFlag = (getBodyWidth/2 - that.startLeft - that.moveX)/that.stepWidth * that.stepNum + that.setMinNum;
				if(sliderMoveStopFlag < that.setMinNum){
					left = getBodyWidth/2;
				}else if(sliderMoveStopFlag > that.setMaxNum){
					left = getBodyWidth/2 - that.getObj.offsetWidth;
				}
				that.getObj.style.left = left + 'px';
			},false)

			that.getObj.addEventListener('touchend',function(e){
				e.preventDefault();
				e.stopPropagation();
				var moveTouch = e.changedTouches[0];
				this.className += ' ' + that.animatedClassName;
				that.movePageX = moveTouch.pageX;
				that.moveX = that.movePageX - that.startPageX;
				that.setSliderValue(this.offsetLeft);
			},false)
		},
		setSliderValue: function (offsetLeft, zdval) {
			var that = this; 
			var getBodyWidth = this.getPobj.offsetWidth;
			var getInteget = parseInt(that.moveX/that.stepWidth);
			var getRemainder = that.moveX % that.stepWidth;
			var left = 0;
			if(Math.abs(getRemainder)==0 && getInteget == 0){
				left = that.startLeft;
			}
			if(Math.abs(getRemainder) >= (that.stepWidth/2)){
				if(getRemainder > 0){
					left = that.startLeft + that.stepWidth*(getInteget + 1);//向右移动
				}else if(getRemainder < 0){
					left = that.startLeft + that.stepWidth*(getInteget - 1);//向左移动
				}
			}else{
				left = that.startLeft + that.stepWidth * getInteget;
			}
			left = Math.round((left-that.getSliderGuideLeftDeviation)/that.stepWidth) * that.stepWidth + that.getSliderGuideLeftDeviation //消除快速滑动产生的误差
			
			var sliderMoveStopFlag = (getBodyWidth/2 - that.startLeft - that.moveX)/that.stepWidth * that.stepNum + that.setMinNum;
			if(sliderMoveStopFlag < that.setMinNum){
				left = getBodyWidth/2;
			}else if(sliderMoveStopFlag > that.setMaxNum){
				left = getBodyWidth/2 - that.getObj.offsetWidth;
			}
			that.getObj.style.left = left + 'px';

			// var SliderGuideDataValue = Math.round((getBodyWidth/2-offsetLeft)/that.stepWidth) * that.stepNum + that.setMinNum;
			var SliderGuideDataValue = Math.round((getBodyWidth/2-left)/that.stepWidth) * that.stepNum + that.setMinNum;
			that.setSliderGuideDataValue(zdval === undefined ? SliderGuideDataValue : zdval);
			that.loadMoreSlider();
		},
		setValue: function (val) {
			// var getSliderGuideDom = document.getElementById('sliderGuide');
      var parent = this.getObj.parentNode || this.getObj.parentElement;
      var getSliderGuideDom = parent.querySelector('#sliderGuide');
			var value = getSliderGuideDom.getAttribute('data-value');
			this.startLeft = this.getObj.offsetLeft;
			this.moveX = (value - val) / this.stepNum * this.stepWidth;
			this.setSliderValue('', val);
		}
	}
	if(typeof module != 'undefined' && module.exports){
		module.exports = Ruler;
	}else if(typeof define == 'function' && define.amd){
		define(function(){
			return Ruler;
		})
	}else{
		window.Ruler = Ruler;
	}
})()