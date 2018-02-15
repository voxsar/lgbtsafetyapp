var $$ = Dom7;
var remote = "http://127.0.0.1/fw7electron/membershipCardApp/";
var db;
var app = new Framework7({
  // App root element
  root: '#mahhala',
  // App Name
  name: 'Mahhala',
  // App id
  id: 'org.mahala.mahhala',
  // Enable swipe panel
  panel: {
	swipe: 'left',
  },
  // Add default routes
  routes: [
		{
			name: 'Home',
			path: '/',
			url: 'main.html',
		},
		{
			name: 'Home',
			path: '/searchMobile',
			url: 'check/searchMobile.html',
		}
  	],
  // ... other parameters
});

var mainView = app.views.create('.view-main', {url: '/'});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
	// Do something here when page loaded and initialized

  	var swiper = app.swiper.create('.swiper-container', {
		speed: 400,
		spaceBetween: 100
	});

	
});

// create searchbar
var searchbar = app.searchbar.create({
	el: '.searchbar',
	searchContainer: '.list',
	searchIn: '.item-title',
	on: {
		search(sb, query, previousQuery) {
			console.log(query, previousQuery);
		}
	}
})

