var Events = function(username) {
	this.user = username;
	this.origin = 'http://localhost:1880/post-list';
	this.tagColors = {
		'kinks': 'teal',
		'video': 'red',
		'social': 'blue',
		'twitch': 'blue',
		'gaming': 'orange',
		'stream': 'purple',
		'area 51': 'green',
		'ro mobile': 'green',
		'netflix': 'red',
		'chill': 'blue',
		'barbecue': 'brown',
		'beer pong': 'orange',
		'random': 'black'
	};
	this.empty = true;

	this.createEvent = function(title, desc, tags, location, time, author) {

		var timePassed = (Date.now() - time);
		var timeDesc = Math.round(timePassed/60) + ' mins ago';
		if(Math.round(timePassed/60) == 0) {
			timeDesc = 'just now';
		}

		var locationDesc = (loc.getDistance({
			lat:location[0],
			lng:location[1]
		})/1000) + ' km away';

		var tagshtml = [];

		for (var i = 0; i < tags.length; i++) {
			var tag = tags[i];
			var color = this.tagColors[tags[i].trim().toLowerCase()];
			tagshtml.push(`
				<span class="mdl-chip mdl-color--${color} mdl-color-text--white">
                    <span class="mdl-chip__text">${tag}</span>
                </span>
			`);
		}

		tagshtml = tagshtml.join('');

		var html = `
			<div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
                <div class="mdl-card__actions meta mdl-color-text--grey-600">
                  <div class="minilogo" style="background-image: url('images/${author}.png');"></div>
                  <div>
                    <span class="mini-title">${title} </span>
                    <span class="mini-desc"> ${desc} </span>
                  </div>
                  <div>
                  </div>
                </div>
                <div class="mdl-card__supporting-text no-pad-top">
                    <span class="user">${author}</span>
                    <span>${locationDesc}</span>
                    <span>${timeDesc}</span>
                </div>
                <div class="mdl-card__supporting-text mdl-card--border">
                	${tagshtml}
                </div>
            </div>
		`;

		$('.event-contents').prepend(html);

		if(this.empty) {
			this.empty = false;
			$('.empty-space').remove();
		}
	};

	this.addPerson = function(person) {
		var html = `
			<li>
			    <span class="mdl-list__item-primary-content">
			      <i class="material-icons mdl-list__item-avatar">person</i>
			      ${person}
			    </span>
	        </li>
		`;
		$('.person_list').append(html);
	}

	this.retrieve = function() {
		var $this = this;
		return $.get(this.origin, function(response){
			for (var i = 0; i < response.length; i++) {
				lfg.addEvent('createdEvent', [
					response[i].title,
					response[i].description,
					response[i].tags,
					response[i].location,
					response[i].timestamp,
					response[i].author
				]);
			}
		}, "json");
	}

}

//test user
var user = null;

if(localStorage.getItem('user')===null) {
	user = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5); // replace this using email in the future or device id
	localStorage.setItem('user', user);
} else {
	user = localStorage.getItem('user');
}

var dashboard = new Events(user);

lfg.addEvent('isOnline', [user, Date.now()]);

// dashboard.retrieve();

