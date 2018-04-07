var profile = {
	gender:"Male",
	height:0, // in cm
	weight:0, // in kg
	distribution:0,
	calculateDistribution: function ()
	calculateBACadded: function (GofAlc) {return GofAlc/(this.weight*this.distribution)}
}

var dataPoint = {
	time:0, // In minutes
	BACadded:0,
	BACatPoint:0,
	calculateBACatPoint: function
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

function DataPoint(time,BACadded,BACatPoint) {
	// Data Point Constructor
	this.time = time;
	this.BACadded = BACadded;
	this.BACatPoint = BACatPoint;
}


function updateDataArray(dataArray) {

	var currPoint = new dataPoint;
	var prevPoint = new dataPoint;

	for(var i in dataArray) {
		if (i = 0)
			prevPoint = DataPoint(0,0,0);
		else
			prevPoint = dataArray[i-1];
		currPoint = dataArray[i];
		currPoint.calculateBACatPoint(prevPoint);
	}
}

function calculateBACatPoint(prevPoint) {
	var decayRate = 0.016;
	var timediff = this.time-prevPoint.time;
	var BACdecay = timediff * decayRate / 60; //Convert min to hours and then multiply by decay rate
	this.BACatPoint = prevPoint.BACatPoint + this.BACadded - BACdecay;
}

function updateDataPoint() {

}