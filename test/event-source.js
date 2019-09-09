// Aggregate
var LFG = function() {
	this.version = 0;
	this.events = [];
	this.user = null;
	this.distance = null;
	this.connection = false;
	this.queue = [];

	this.addEvent = function(eventName, param) {
		this.record(eventName, param);
		// this.applyEvent(eventName, param);
	}

	this.applyEvent = function(eventName, params) {
		switch(eventName) {
			case 'addedDistance':
				this.distance = [params[1], params[2]];
				// addedDistance(...params);
			break;
			case 'isOnline':
				if(params[0] != user)
					dashboard.addPerson(...params);
			break;
			case 'createdEvent':
				dashboard.createEvent(...params);
			break;
		}

		this.version++;
	}

	this.record = function(eventName, param) {
		if($this.server == true) {
			console.log({eventName, param});
			/*$.post('http://192.168.137.1:1880/event', {
				payload: JSON.stringify({eventName, param})
			});
*/			this.currentUser.sendSimpleMessage({
				text: JSON.stringify({eventName, param}),
				roomId: this.currentUser.rooms[0].id
			});
		} else {
			console.log('server not open yet');
			this.queue.push({eventName, param});
		}

	}

	this.retry = function() {
		for (var i = 0; i < this.queue.length; i++) {
			this.record(this.queue[i].eventName, this.queue[i].param);
		}
		this.queue = [];
	}

	this.loadEvents = function() {

	}

	this.initListener = async function() {
		/*$this = this;

		var domain = 'ws://192.168.137.1:1880';
		var listenSocket = new WebSocket(domain + "/public/lfg-events");

		listenSocket.onopen = function (event) {
			$this.server = true;
			$this.retry();
		}

		listenSocket.onmessage = function (event) {
			var stuff = JSON.parse(event.data);
			var more = JSON.parse(stuff.payload);

			$this.applyEvent(more.eventName, more.param);
		}
*/
		$this = this;

		const tokenProvider = new Chatkit.TokenProvider({
			url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/24c93648-05d3-4fee-bfa3-9a55eac36444/token"
		});

		const chatManager = new Chatkit.ChatManager({
			instanceLocator: "v1:us1:24c93648-05d3-4fee-bfa3-9a55eac36444",
			userId: "circle",
			tokenProvider: tokenProvider
		});

		chatManager
		.connect()
		.then(currentUser => {
			$this.currentUser = currentUser;
			console.log('connected');
			$this.server = true;
			$this.retry();
		   currentUser.subscribeToRoomMultipart({
		    roomId: currentUser.rooms[0].id,
		    hooks: {
		      onMessage: message => {
		        console.log("Received message:", message.senderId, message.parts[0].payload.content);
		        // var stuff = JSON.parse(event.data);
		        try {
					var more = JSON.parse(message.parts[0].payload.content);
		        	// apply events
					$this.applyEvent(more.eventName, more.param);
		        } catch(e) {
		        	console.log('Cannot parse ' + message.parts[0].payload.content);
		        }

		      }
		    }
		  });
		})
		.catch(error => {
		  console.error("error:", error);
		});
	}

	this.initListener();
}

var lfg = new LFG();

// lfg.addEvent('signedIn', ['circle', Date.now()]);
// lfg.addEvent('addedDistance', ['circle', 141, 142]);