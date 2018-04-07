function Profile(gender,height,weight) {
	// Profile Constructor
	this.gender = gender; // "male" or "female"
	this.height = height; // in cm
	this.weight = weight; // in kg
	this.distribution = this.calculateDistribution();
	this.calculateDistribution = calculateDistribution;
	this.calculateBACadded = calculateBACadded;
}

function calculateDistribution () {
	// Distribution calculated using Seidl Formula for volume distribution of alcohol
	// Weight is in kg
	// Height is in cm
	if (this.gender == "male") {
		this.distribution = 0.31608 - 0.004821 * this.weight + 0.4623 * this.height;
	}
	else if (this.gender == "female") {
		this.distribution = 0.31223 - 0.006446 * this.weight + 0.4468 * this.height;
	}
}

function calculateBACadded (GofAlc) {
	// GofAlc in grams
	return GofAlc/(this.weight*this.distribution);
}

function DataPoint(time,BACadded,BACatPoint) {
	// Data Point Constructor
	this.time = time;
	this.BACadded = BACadded;
	this.BACatPoint = BACatPoint;
	this.calculateBACatPoint = calculateBACatPoint;
}

function calculateBACatPoint(prevPoint) {
	var decayRate = 0.016;
	var timediff = this.time.getTime()-prevPoint.time.getTime();
	var BACdecay = (timediff / 1000 / 3600) * decayRate ; //Convert ms to hours and then multiply by decay rate
	this.BACatPoint = prevPoint.BACatPoint + this.BACadded - BACdecay;
}

function updateDataArray(dataArray) {

	var currPoint = new DataPoint(0,0,0); // Unsure if this is correct syntax to initalize variables
	var prevPoint = new DataPoint(0,0,0);

	for(var i in dataArray) {
		if (i = 0) {
			prevPoint = new DataPoint(0,0,0);
		}
		else {
			prevPoint = dataArray[i-1];
		}
		currPoint = dataArray[i];
		currPoint.calculateBACatPoint(prevPoint);
	}
}

function updateDataPoint() {

}