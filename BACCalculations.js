var profile = {
	gender:"Male",
	height:0,
	weight:0, // in kg
	distribution:0,
	BACadded: function (GofAlc) {return GofAlc/(this.weight*this.distribution)}
}

var dataPoint = {
	time:0, // In minutes
	BACadded:0,
	BACatPoint:0,
	calculateBACatPoint: function
}


function DataPoint(time,BACadded,BACatPoint) {
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
