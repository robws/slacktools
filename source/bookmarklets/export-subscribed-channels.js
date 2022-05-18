/**
* export-subscribed-channels
* @description
	export Slack channels that you can see in the browser for a logged-in Slack account
	Note: make sure you allow popups in Chrome for Slack so that the bookmarklet can show the new window
* @dependencies
* @minified (unescaped)
	javascript:(function(){function newTextWindow(thisText){var newWindow=window.open("","_blank","width=700,height=400").document;newWindow.write("<html><head><title>Channels</title>");newWindow.write("<style>textarea {font-size:12px; height:500px;width:500px}</style>");newWindow.write("<body>");var b=newWindow.createElement("textarea");b.textContent=thisText;newWindow.body.appendChild(b);b.select();newWindow.write("</body>");newWindow.write("</html>");newWindow.close()}channelsDivSelector="[aria-label='Channels']";attributeName="data-qa-channel-sidebar-channel-id";var channelData=[];var talkChannels=document.querySelectorAll('[data-qa-channel-sidebar-channel-type="channel"]');talkChannels.forEach(function(thisChannel){var channelId=thisChannel.getAttribute("data-qa-channel-sidebar-channel-id");var channelName=thisChannel.querySelector("span.p-channel_sidebar__name").textContent;channelListItem=`channel,${channelId},${channelName}`;channelData.push(channelListItem)});var peopleChannels=document.querySelectorAll('[data-qa-channel-sidebar-channel-type="im"]');peopleChannels.forEach(function(thisChannel){var channelId=thisChannel.getAttribute("data-qa-channel-sidebar-channel-id");var channelName=thisChannel.querySelector("span.p-channel_sidebar__name").textContent;channelListItem=`talk,${channelId},${channelName}`;channelData.push(channelListItem)});channelText=channelData.join("\n").replace(/\+/g," ");newTextWindow(channelText)})();
* @minified (escaped)
*/
javascript: (function() {
	function newTextWindow(thisText) {
		var newWindow = window.open("", "_blank",
			"width=700,height=400").document;
		newWindow.write("<html><head><title>Channels</title>");
		newWindow.write(
			"<style>textarea {font-size:12px; height:500px;width:500px}</style>"
			);
		newWindow.write("<body>");
		var b = newWindow.createElement("textarea");
		b.textContent = thisText;
		newWindow.body.appendChild(b);
		b.select();
		newWindow.write("</body>");
		newWindow.write("</html>");
		newWindow.close()
	}
	channelsDivSelector = "[aria-label='Channels']";
	attributeName = "data-qa-channel-sidebar-channel-id";
	var channelData = [];
	var talkChannels = document.querySelectorAll(
		'[data-qa-channel-sidebar-channel-type="channel"]');
	talkChannels.forEach(function(thisChannel) {
		var channelId = thisChannel.getAttribute(
			"data-qa-channel-sidebar-channel-id");
		var channelName = thisChannel.querySelector(
			"span.p-channel_sidebar__name").textContent;
		channelListItem = `channel,${channelId},${channelName}`;
		channelData.push(channelListItem)
	});
	var peopleChannels = document.querySelectorAll(
		'[data-qa-channel-sidebar-channel-type="im"]');
	peopleChannels.forEach(function(thisChannel) {
		var channelId = thisChannel.getAttribute(
			"data-qa-channel-sidebar-channel-id");
		var channelName = thisChannel.querySelector(
			"span.p-channel_sidebar__name").textContent;
		channelListItem = `talk,${channelId},${channelName}`;
		channelData.push(channelListItem)
	});
	channelText = channelData.join("\n").replace(/\+/g, " ");
	newTextWindow(channelText)
})();