const oldData = [
	{
		"id": "1527779741527779746930",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "1"
		},
		"status": {
			"complete": "false",
			"dateCompleted": "",
			"hoursWorked": "",
			"unitPrice": ""
		}
	},
	{
		"id": "1527779741527779746931",
		"type": "workshop",
		"details": {
			"title": "shoe making"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746932",
		"type": "shoe",
		"details": {
			"colourStitching": "red",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "42",
			"quantity": "1"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-04-21T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746933",
		"type": "workshop",
		"details": {
			"title": "shoe making"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-04-29T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746934",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "2"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-03-22T15:03:07.879Z",
			"hoursWorked": "2",
			"unitPrice": "20"
		}
	},
	{
		"id": "1527779741527779746935",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "2",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746936",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "3"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "4",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746937",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746938",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "5"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746939",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	}
];

const updatedEntry = {
	"id": "1527779741527779746930",
	"type": "Hello",
	"details": {
		"colourStitching": "blue",
		"colourFront": "caramel",
		"colourBack": "caramel",
		"shoeSize": "36",
		"quantity": "1"
	},
	"status": {
		"complete": "false",
		"dateCompleted": "",
		"hoursWorked": "",
		"unitPrice": ""
	}
};

const expected = [
	{
		"id": "1527779741527779746930",
		"type": "Hello",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "1"
		},
		"status": {
			"complete": "false",
			"dateCompleted": "",
			"hoursWorked": "",
			"unitPrice": ""
		}
	},
	{
		"id": "1527779741527779746931",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746932",
		"type": "shoe",
		"details": {
			"colourStitching": "red",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "42",
			"quantity": "1"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-04-21T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746933",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-04-29T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746934",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "2"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-03-22T15:03:07.879Z",
			"hoursWorked": "2",
			"unitPrice": "20"
		}
	},
	{
		"id": "1527779741527779746935",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "2",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746936",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "3"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "4",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746937",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746938",
		"type": "shoe",
		"details": {
			"colourStitching": "blue",
			"colourFront": "caramel",
			"colourBack": "caramel",
			"shoeSize": "36",
			"quantity": "5"
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	},
	{
		"id": "1527779741527779746939",
		"type": "workshop",
		"details": {
			"title": "shoe making"		
		},
		"status": {
			"complete": "true",
			"dateCompleted": "2018-05-31T15:03:07.879Z",
			"hoursWorked": "1",
			"unitPrice": "50"
		}
	}
];

module.exports = { expected, oldData, updatedEntry };