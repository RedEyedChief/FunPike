const MISSION_TEMPLATE = {
	id : "mTemplate",
	type: null,
	position : {
		top : 35,
		left : 4
	},
	domObjs : {
		flag : null,
		call : null,
		message : null,
		startModal : null,
		resultModal : null
	},
	content : {
		title : "Some title",
		description : "Some nudes"
	},
	requirements: {
		cuntCount: 1
	},
	reward: {
		currency: 999,
		item: "pike"
	},
	src : {
		img : "./img/tits.gif"
	},
	status : "hidden",
	countdown : {
		dayWorkAppearTime : 1,
		initTime : null,
		startCounter : 15,
		currentCounter : 15,
		startWaiting : null
	},
	routes : {
		main : [ "spawn" , "point-7" ]
	},
	generatedWays : {},
	widgets: {},
	comrades : [],
	processInfo : {}
}

const MISSIONS = [
	{
		id : "m1",
		type: "self",
		maxComradesAmount : 3,
		position : {
			top : 10,
			left : 20
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 1,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-2", "point-5", "point-6" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: {
				starsSum: 250
		},
		reward: {
			currency: 420,
			item: "pike"
		},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m2",
		type: "manual",
		maxComradesAmount : 2,
		position : {
			top : 30,
			left : 82
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			arrivalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			storyTree: {
				a11: {
					type: "final",
					text: "Lorem Ipsum",
					requirements: {
						starsSum: 500
					}
				},
				b11: {
					type: "final",
					text: "Ipsum lorem",
					requirements: {
						skills: "dominant"
					}
				},
				c11: {
					type: "final",
					text: "Merol Muspi",
					requirements: {
						skills: "strong"
					}
				},
				d11: {
					type: "final",
					special: "skin",
					text: "Muspi Merol",
					requirements: {
						skin: "black"
					}
				}
			}
		},
		requirements: null,
		reward: {
			currency: 666,
			item: "pike"
		},
		src : {
			img : "./img/tits.gif"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 13,
			initTime : null,
			startCounter : 25,
			currentCounter : 25,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-2", "point-3", "point-4" ]
		},
		generatedWays : {},
		widgets: {},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m3",
		type: "reinforcement",
		maxComradesAmount : 5,
		position : {
			top : 35,
			left : 4
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
			arrivalDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		requirements: {
			cuntCount: 5
		},
		reward: {
			currency: 999,
			item: "pike"
		},
		src : {
			img : "./img/tits.gif"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 1,
			initTime : null,
			startCounter : 15,
			currentCounter : 15,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-7" ]
		},
		generatedWays : {},
		widgets: {},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m4",
		type: "self",
		maxComradesAmount : 1,
		position : {
			top : 47,
			left : 57
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 31,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-12", "point-13" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: {
				skills: "goldenRainOut"
		},
		reward: {
			currency: 420,
			item: "pike"
		},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m5",
		type: "fake",
		maxComradesAmount : 3,
		position : {
			top : 20,
			left : 60
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 2,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-2", "point-14" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: null,
		reward: null,
		comrades : [],
		processInfo : {}
	},
	{
		id : "m6",
		type: "fake",
		maxComradesAmount : 3,
		position : {
			top : 54,
			left : 80
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 4,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-12", "point-15" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: null,
		reward: null,
		comrades : [],
		processInfo : {}
	},
	{
		id : "m7",
		type: "citizen",
		maxComradesAmount : 3,
		position : {
			top : 31,
			left : 29
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 1,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-12", "point-16" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: {
				cuntCount: 3
		},
		reward: {
			skills: "selfDefence"
		},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m8",
		type: "citizen",
		maxComradesAmount : 5,
		position : {
			top : 18,
			left : 74
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 100,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-2", "point-17", "point-18" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: {
				cuntCount: 5
		},
		reward: {
			currency: "dohuya ta troshky bilshe"
		},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m10",
		type: "citizen",
		maxComradesAmount : 1,
		position : {
			top : 18,
			left : 74
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 1,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-2", "point-17", "point-18" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: {
				cuntCount: 1
		},
		reward: {
			currency: "dohuya ta troshky bilshe"
		},
		extraEffect : {
			leave: true
		},
		comrades : [],
		processInfo : {}
	},
	{
		id : "m11",
		type: "citizen",
		maxComradesAmount : 1,
		position : {
			top : 18,
			left : 74
		},
		domObjs : {
			flag : null,
			call : null,
			message : null,
			startModal : null,
			resultModal : null
		},
		content : {
			title : "Lorem Ipsum",
			description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
		},
		src : {
			img : "./img/test.jpg"
		},
		status : "hidden",
		countdown : {
			dayWorkAppearTime : 42,
			initTime : null,
			startCounter : 30,
			currentCounter : 30,
			startWaiting : null
		},
		routes : {
			main : [ "spawn" , "point-1", "point-2", "point-17", "point-18" ]
		},
		generatedWays : {},
		widgets: {},
		requirements: {
				cuntCount: 1
		},
		reward: {
			currency: "dohuya ta troshky bilshe"
		},
		extraEffect : {
			leave: true
		},
		comrades : [],
		processInfo : {}
	}
]



const STORY_LINE = {
	index : "000",
	lines : [
		{
			text : "vzyauu",
			index : "100",
			lines : [
				{
					text : "aaaa124",
					index : "110",
					lines : [
						{
							text : "a1",
							end : "best"
						},
						{

							text : "a2",
							end : "good"
						},
						{

							text : "a4",
							end : "died"
						}
					]
				},
				{

					text : "vz3",
					end : "fail"
				},
				{

					text : "vzya3",
					end : "fail"
				}
			]
		},
		{
			text : "pryhavav",
			index : "200",
			lines : [
				{

					text : "pr2",
					end : "good"
				},
				{

					text : "pr3",
					end : "fail"
				},
				{
					text : "pryha14",
					index : "230",
					lines : [
						{
							text : "pryhavav1",
							end : "best"
						},
						{

							text : "pryhavav4",
							end : "died"
						}
					]
				}
			]
		},
		{
			text : "solodenko",
			index : "300",
			lines : [
				{

					text : "s4",
					end : "died"
				},
				{
					text : "solo34",
					index : "320",
					lines : [
						{
							text : "solodenko3",
							end : "fail"
						},
						{

							text : "solodenko4",
							end : "died"
						}
					]
				}
			]
		}
	]
}

const MISSION_RESULTS = {
	success: {
		verdict: "success",
		comrades: "unscathed",
		client: "payed"
	},
	terrible: {
		verdict: "fail",
		comrades: "scathed",
		client: "disappeared without paying"
	},
	neutral: {
		verdict: "fail",
		comrades: "unscathed",
		client: "disappeared without paying"
	},
	bad: {
		verdict: "fail",
		comrades: "scathed",
		client: "payed"
	}
}

const COMRADES = [
	{
		id : "c1",
		skin : "white",
		skills : {
			bigTits: "bigTits"
		},
		content : {
			name : "Kochi",
			power : 420,
			img : "./img/comrade-1.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 5
	},
	{
		id : "c2",
		skin : "white",
		skills : {
			goldenRainOut: "goldenRainOut",
			bigTits: "bigTits",
			strong: "strong"
		},
		content : {
			name : "Yancey",
			power : 140,
			img : "./img/comrade-2.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 4
	},
	{
		id : "c3",
		skin : "white",
		skills : {
			tech: "tech",
			mobile: "mobile"
		},
		content : {
			name : "Purdy",
			power : 280,
			img : "./img/comrade-3.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 1
	},
	{
		id : "c4",
		skin : "black",
		skills : {
			cherry: "cherry"
		},
		content : {
			name : "Yurdi",
			power : 150,
			img : "./img/comrade-4.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 2
	},
	{
		id : "c5",
		skin : "white",
		skills : {
			strip: "pro"
		},
		content : {
			name : "Yurec",
			power : 320,
			img : "./img/comrade-5.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 4
	},
	{
		id : "c6",
		skin : "white",
		skills : {
			costume: "maid",
			slave: "slave"
		},
		content : {
			name : "Turec",
			power : 270,
			img : "./img/comrade-6.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 5
	},
	{
		id : "c7",
		skin : "white",
		skills : {
			costume: "police",
			toys: "toys"
		},
		content : {
			name : "Anec",
			power : 350,
			img : "./img/comrade-7.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 5
	},
	{
		id : "c8",
		skin : "white",
		skills : {
			costume: "latex",
			toys: "toys"
		},
		content : {
			name : "Ivan",
			power : 550,
			img : "./img/comrade-8.png"
		},
		domObjs : {
			comrade : null,
			modalBio : null
		},
		energyLevel : 4
	}
]

const COPS = [
	{
		id : "cop1",
		status : "hidden",
		routes : {
			main : [ "copSpawn" , "cop-spawn-exit", "point-10", "point-5", "point-8", "point-9" ],
			backward : [ "copSpawn" , "cop-spawn-exit", "point-10" ],
			patrol : [ "point-10", "point-5", "point-8", "point-9" ]
		},
		generatedWays : {},
		car : {
			id : null,
			domObj : null
		},
		countdown : {
			dayWorkAppearTime : 1
		}
	},
	{
		id : "cop2",
		status : "hidden",
		routes : {
			main : [ "copSpawn" , "cop-spawn-exit", "point-10", "point-5", "point-7", "point-1" ],
			backward : [ "copSpawn" , "cop-spawn-exit", "point-10", "point-5", "point-7" ],
			patrol : [ "point-7", "point-1" ]
		},
		generatedWays : {},
		car : {
			id : null,
			domObj : null
		},
		countdown : {
			dayWorkAppearTime : 2
		}
	}
]

const MAX_COMRADE_ENERGY = 5;

const MISSION_STATUSES = {
	hidden: "hidden",
	active : "active",
	accepted : "accepted",
	wait : "wait",
	fight : "fight",
	pressed : "pressed",
	failed : "failed",
	done : "done",
	return : "return",
	past : "past"
}

const MISSION_TYPES = {
	regular: {
		manual: "manual",
		fake: "fake",
		self: "self",
		reinforcement: "reinforcement"
	},
	citizen: "citizen",
	cops: "cops",
	don: "don"
}

const CAR_STATUSES = {
	hidden: "hidden",
	drive : "drive",
	wait : "wait",
	patrolling : "patrolling"
}

const COP_STATUSES = {
	hidden: "hidden",
	drive : "drive",
	wait : "wait",
	patrolling : "patrolling"
}

const POINT_STATUSES = {
	next: "next",
	current: "current",
	past: "past"
}

const RF_STAGE = {
	start: "start",
	end: "end",
	waiting: "waiting"
}

const MISSION_TYPE_ARRAY = [ 'manual', 'fake', 'self', 'reinforcement' ]
