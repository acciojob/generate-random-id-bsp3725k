function makeid(l) {
  // write your code here
	var res = "";
	var char_list = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for(let i=0;i<l;i++){
		res += char_list.charAt(Math.floor(Math.random()*char_list.length));
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
