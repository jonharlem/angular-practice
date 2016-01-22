function mostLikely(prob1,prob2){
	var toArray1 = prob1.split(":");
	var toArray2 = prob2.split(":");

	if((toArray1[0]/toArray1[1]) < (toArray2[0]/toArray2[1])) { 	
	 	return console.log(false);
	} else {
		return console.log(true);
	}
}

// ==========
mostLikely('1:2', '1:3') //false