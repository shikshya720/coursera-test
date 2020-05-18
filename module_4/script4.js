(function(window){
	var names =["shikshya","Laxmi","Monika","John","Paul","anisha","jeshika","Julie"];
	for (var i=0; i < names.length; i++){
		var firstLetter = names[i].charAt(0).toLowerCase();
		if (firstLetter ==='j') {
			byeSpeaker.speak(names[i]);
		}
		else{
			helloSpeaker.speak(names[i]);
		}
	}
	window.names=names;
})(window);