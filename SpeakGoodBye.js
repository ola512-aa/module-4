( function (window) { 
	var myObjSpeak={};
 myObjSpeak.speakWord= "Good Bye";

myObjSpeak.speak  =	 function (name) {
  console.log(myObjSpeak.speakWord + " " + name);
}
window.myObjSpeak=myObjSpeak;
})(window);