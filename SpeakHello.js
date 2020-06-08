( function (window) {

var myObjSpeak1={};
 myObjSpeak1.speakWord=  "Hello";

myObjSpeak1.speak =	function (name) {
  console.log(myObjSpeak1.speakWord + " " + name);
}
window.myObjSpeak1=myObjSpeak1;
})(window);