# *Plus 50* - Twitch Channel Points Auto Clicker

## About

*Plus 50*  is an auto clicker and timer for use with your favourite Twitch channels. I made this extension to help anyone who wants to collect channel points whilst passively listening to streams without the need to check in and click a button every 15 minutes.

## Installation

Coming soon - extension pending review. In the mean time the extension can be loaded using Chrome developer tools found in the extensions tab. You can learn how to do that [here](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/#:~:text=Follow%20the%20steps%20to%20load,Then%20Select%20Extensions.&text=Click%20on%20Load%20Unpacked%20and%20select%20your%20Unzip%20folder.).

## How it works

*Plus 50* checks every five seconds to see if the channel points button is available to click. If the button is available, it clicks it. The extension also comes with a timer to give you a rough idea how long it will be until your next collection of points. If you are subscribed to a channel, *Plus 50* will display a purple tick to let you know that you are earning extra points.

![alt text](https://i.imgur.com/ZWdpWXw.png)

## Notes

* The button should still get clicked even if twitch is not your main tab. However if there are any issues they will usually be solved by a page refresh.

* The timer can get out of sync if you refresh the page or if the extension has not yet clicked on the icon this session. This is unavoidable in the current implementation but fixes itself whenever a new auto click occurs.

* *Plus 50* will not load in for the first ten seconds after the page loads. This is to ensure that all of the needed page elements are loaded as the DOMContentLoaded event was producing unreliable results.

* If any problems arise with *Plus 50* or any of its functionalities, refreshing the page will usually fix them.