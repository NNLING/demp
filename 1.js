window.onload = function (){
	function Drag(id){
		this.obj = document.getElementById(id);
		this.disX = 0;
		this.disY = 0;
		var _this = this;
		this.obj.addEventListener('mousedown',function (ev){
			_this.fnDown(ev)
		})
	};
	Drag.prototype.fnDown = function (ev){
		disX = ev.pageX - this.obj.offsetLeft;
		disY = ev.pageY - this.obj.offsetTop;
		var that = this;
		document.addEventListener('mousemove',Move);
		function Move(){
			that.fnMove(ev)
		}
		document.addEventListener('mouseup',Up)
		function Up(){
			that.fnUp();
		}
	};
	Drag.prototype.fnMove = function (ev){
		this.obj.style.left = ev.pageX - disX + 'px';
		this.obj.style.top = ev.pageY - disY + 'px'
	};
	Drag.prototype.fnUp = function (){
		document.removeEventListener('mousemove',Move);
		document.removeEventListener('mouseup',Up);
	}
	var dem = new Drag('box')
}