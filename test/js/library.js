var readURLResult = '';
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      readURLResult = e.target.result;
    }
    reader.readAsDataURL(input.files[0]);
  }
}


function addPerson(src) {
  var html = [
  '<img class="icon icon_1" src="',
  src,
  '" />'
  ].join('');

  $('.people').append(html);
}


function addEventCard(event_image, event_title, event_date_from, event_time_from) {
  var html = [
  '<div class="event-card">',
  '<img src="' + event_image + '" class="pic" />',
  '<div class="text title">'+event_title+'</div>',
  '<div class="text date">'+[event_date_from,event_time_from].join(', ')+'</div>',
  '<div class="text context">0 friends joined</div>',
  '<a href="#" class="text action">Get Tickets</a>',
  '</div>'
  ].join('');

  $('.event_tab').append(html);

  if(isDarkMode) {
    darkModeOn();
  }
}

function addCommCard(comm_image, comm_title, comm_tags) {
  var html = [
  '<div class="event-card">',
  '<img src="'+ comm_image +'" class="pic" />',
  '<div class="text title">#'+comm_title+'</div>',
  '<div class="text members">0 members</div>',
  '<div class="tags-container">',
  ];

  for (var i = 0; i < comm_tags.length; i++) {
    html.push('<div class="chip">'+comm_tags[i]+'</div>');
  }

  html.push('</div>');
  html.push('</div>');

  $('.comm_tab').append(html.join(''));

  if(isDarkMode) {
    darkModeOn();
  }
}