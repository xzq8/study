// JavaScript Document
!(function(win, doc){
    function setFontSize() {
		var docEl = doc.documentElement;
		var winWidth = docEl.clientWidth;

       if(winWidth<=640){
        doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;
       //document.body.style.fontSize=0.24+'rem';
       }
		else{
			
			docEl.style.fontSize=100+"px";
document.body.style.fontSize=20+'px';


			}
    }
     
    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    
    var timer = null;
 
    win.addEventListener(evt, function () {
        clearTimeout(timer);
 
        timer = setTimeout(setFontSize, 300);
    }, false);
    
    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);
 
            timer = setTimeout(setFontSize, 300);
        }
    }, false);
 
    setFontSize();
 
}(window, document));

