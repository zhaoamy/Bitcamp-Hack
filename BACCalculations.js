var profile = {
	gender:"Male",
	height:0,
	weight:0,
	distribution:0,
}


var dataPoint = {
	time:0,
	BACadded:0,
	BACatPoint:0,
	calculateBAC: function
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
		currPoint.calculateBAC(prevPoint);
	}

}

function calculateBAC(prevPoint) {
	var timediff = this.time-prevPoint.time;

}

function updateDataPoint() {

}