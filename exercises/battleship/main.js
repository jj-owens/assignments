function newLocation(isShip, hit, display) {
	this.isShip = isShip();
	this.hit = false;
	this.display = String;
	
	
	function isShip(){
		if (Math.floor(Math.random() * (5 - 1 + 1) + 1)  == 1){
			return true;
		} else {
			return false;
		}
	};
}




module.exports = newLocation;
