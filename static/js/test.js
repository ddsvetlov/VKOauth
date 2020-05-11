// get access_token
function parseUrl(Url) {

	// go to Url
	window.location = Url;

	// parse Url to get access_token
	var ResUrl = $(location).attr("hash");
	var access= ResUrl.split(/=|&/);
	localStorage.setItem('access_token', access[1]);
	localStorage.setItem('uid', access[5]);
	selfLoad();
	friendsLoad();
}

// helper func to create Url
function getUrl(method,params) {
	params = params || {};
	params['access_token']=localStorage.getItem('access_token');
	version = 5.52;

	return 'https://api.vk.com/method/'+ method +'?' + $.param(params)+'&v='+version;
}

// Send request to server with a choice method and params
function sendReq(method, params,func) {
	$.ajax({
		url: getUrl(method,params),
		method: 'GET',
		dataType: 'JSONP',
		success: func
	});
}

// load self info
function selfLoad() {
	sendReq('users.get',{user_ids:localStorage.getItem('uid')},function(data){
		showMe(data.response);
		console.log(data.response);
	});
}

// show self info
function showMe(info){
	var page = '';
	page+=
	'<a target="_blank" href="https://vk.com/id'+ localStorage.getItem('uid') + '">'+
				'<div>'+
					'<h>'+'Welcome,  '+ info[0].first_name+' '+ info[0].last_name+'</h>'+
				'</div>'+
			'</a>';
	$('div').html(page);
}

// load list of friends
function friendsLoad() {
	sendReq('friends.search',{count: 5, fields: 'photo_50'}, function (data){
		showFriends(data.response);
	});
}

// create table with friends
function showFriends(friends) {
	var page = '';
	for (var i=0;i<friends.items.length;i++) {
		var friend =friends.items[i];
		page+= 
		'<li>'+ 
			'<a target="_blank" href="https://vk.com/id'+ friend.id + '">'+
				'<img src="'+friend.photo_50+'" />'+
				'<div>'+
					'<h>'+ friend.first_name+' '+ friend.last_name+'</h>'+
				'</div>'+
			'</a>'+
		'</li>';
	}
	$('ul').html(page);
}

