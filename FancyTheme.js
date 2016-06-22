// ==UserScript==
// @name           FancyPlug
// @namespace      http://www.plug.dj/
// @description    Loading FancyPlug script
// @include        http://www.plug.dj/
// @include        http://plug.dj/st-army-elite
// ==/UserScript==

function addGlobalStyle(css){
	var head, style;
	head = document.getElementsByTagName('head')[0];
	if(!head){
		return;
	}
	style = document.createElement('style');
	style.type = 'text/css';
	style.innerHTML = css;
	head.appendChild(style);
}

//addGlobalStyle('#audience-canvas, #audience-canvas {background-image: max-height:0px;max-width:0px;}');

//===when adding a new room you must copy one of the "else if" scripts and past it above the "else" script. you can not put them below 
//the "else" script because that is the end of the code thread. replace the name of the 
//newly pasted room with the http name of the room not the name that is on the page.
//for example the Drum & Bass rooms name is d&b but on the http name its Drum-Bass. 
//second step is to go to the top and make a new // @include123456789<link here> 10 spaces after the //. have fun.

if (location.pathname.match('st-army-elite')) {
	addGlobalStyle('html{background:none;');
addGlobalStyle('html{background: url("https://i.imgur.com/DKAqiOt.jpg");background-size: cover;background-repeat: no-repeat;min-height:100%; height:100%; width:100%; ');

} else { //this background's used for all other rooms not listed elsewhere
addGlobalStyle('html{background: url("http://fc08.deviantart.net/fs70/f/2012/149/4/9/plug_dj_skin_2_by_liamgoodyear-d51j3xs.jpg");');
}

addGlobalStyle('.top, .top {background-color: rgba(0, 0, 0, 0.6);}');

addGlobalStyle('.icon-room, .icon-room {background: url("http://i.imgur.com/NJaZw.png");height:30px;width:30px;}'); //promjena logo-a
addGlobalStyle('.icon-grab, .icon-grab {background: url("http://i.imgur.com/U0KmP8r.png");height:30px;width:30px;}');
addGlobalStyle('.icon-woot, .icon-woot {background: url("http://i.imgur.com/4vSEib2.png");height:30px;width:30px;}');
addGlobalStyle('.icon-meh, .icon-meh {background: url("http://i.imgur.com/xJdXvcm.png");height:30px;width:30px;}');

addGlobalStyle('#meh .bottom, #meh.selected {background:#DB3340;}');
addGlobalStyle('#woot .bottom, #woot.selected {background:#26A4D9;}');
addGlobalStyle('#grab .bottom, #grab.selected {background:#1fda9a;}')

addGlobalStyle('#create-room-button, #create-room-button {background-image: url("http://i.imgur.com/oW6ir.png");min-height:33px;min-width:131px;}'); //change create room button

addGlobalStyle('#room-wheel, #room-wheel {background-image: max-height:0px;max-width:0px;}'); //hide the upper bg image (clashes with main bg)

addGlobalStyle('#user-points, #user-points {background-image: url("http://th09.deviantart.net/fs70/PRE/i/2012/115/f/c/shining_armor_cutie_mark_by_noxwyll-d4xjdre.png");maxheight:25px;background-size: 100% 100%;max-width:25px;}'); //cutie mark

addGlobalStyle('#user-fans, #user-fans {background-image: url("http://i.imgur.com/2trwR.png");maxheight:25px;max-width:25px;}'); //Yay

//addGlobalStyle('html{background: url("http://i.minus.com/i8d3ntlkKcBbp.png") no-repeat scroll center top #424242;'); //main background

addGlobalStyle('#button-dj-play.button-dj, #button-dj-play.button-dj {background-image: url("http://i.imgur.com/25rO8.png")!important;}');//join DJ button

addGlobalStyle('#button-dj-quit.button-dj, #button-dj-quit.button-dj {background-image: url("http://i.imgur.com/u9vac.png")!important;}');//quit DJ button

//if you want to change the font, uncomment this part and edit with the font you want, google "font css" or something like that for the codes.
//addGlobalStyle("* {" + "font-family:Cambria,'Times New Roman','Nimbus Roman No9 L','Freeserif',Times,serif; !important;" + "}"); //for font changing

addGlobalStyle('#playlist-button, #playlist-button {background: linear-gradient(to bottom,#00b1e4 0,#07617d 100%);}');
//join waitlist button, haven't made an image yet
//addGlobalStyle('#button-dj-waitlist-join.button-dj, #button-dj-waitlist-join.button-dj {background-image: url("http://i.imgur.com/25rO8.png")!important;}');

//user avatar in room, not sticking yet.
//addGlobalStyle('#button-user-avatar, #button-user-avatar {background-image: url("http://i.imgur.com/25rO8.png")!important;}');

