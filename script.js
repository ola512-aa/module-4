
function  helloSpeaker() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul",
         "Frank", "Larry", "Paula", "Laura", "Jim"];
         var firstLetter; 
   for (var i = 0; i < names.length; i++) {
    firstLetter =names[i].charAt();

    if (names[i].toLowerCase(firstLetter).charAt()=="j")
    {

      myObjSpeak.speak(names[i]);
    } 
        else {
         myObjSpeak1.speak(names[i]);
        }   
      }
}
helloSpeaker();