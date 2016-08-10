# GifRocket
<br />
<p>
<b><a href="#overview">Overview</a></b>
|
<b><a href="#usage">How to use</a></b>
|
<b><a href="#installation">Installation</a></b>
|
<b><a href="#team">Team</a></b>
|
<b><a href="#license">Copyright & License</a></b>
</p>
<br /><br />

## Overview <a name="overview"></a>
GifRocket is a slash-command which sends your given phrases to Giphy and returns any according gif or sticker.
<br /><br /><br /><br />

## How to use <a name="usage"></a>

### Gifs
GifRocket reacts on a slash-command. For example entering `/gif test` shows a gif relating to the word `test`.<br />
Try to use `/gif random` as phrase and receive a random gif.
<br /><br />

### Sticker
GifRocket reacts on a slash-command. For example entering `/sticker test` shows a sticker relating to the word `test`.<br />
Try to use `/sticker random` as phrase and receive a random sticker.
<br /><br /><br /><br />

## Installation <a name="installation"></a>

### Download code
Download source using the button link at the top of this page.<br />
Unzip Sources.
Alternatively, clone this repo using your favorite git client.
<br /><br /><br />

### Configure Rocket.Chat

#### Add user (optional)
This step is optional if you've already got a user which you want to use as post author you can skip this step.<br />
Otherwise add a new user who is posting the updates to your channel or who ist texting the user which is supposed to be informed.
<br /><br />

#### Configure outgoing Webhook in Rocket.Chat
In your Rocket.Chat instance go to administration panel an click on "Integrations". To add an integration with BitRocket click on "NEW INTEGRATION".<br />
Next, choose "Outgoing WebHook".
<br />
Now, on the webhook config screen, set the following values:
<br /><br />

##### Enabled
Set this value to true/yes
<br /><br />

##### Name (optional)
Enter the desired name for the integration (e.g. "GifRocket").
<br /><br />

##### Channel
Self-explaining option. Insert the desired channel which should be listened.
<br /><br />

##### Trigger Words
Set the trigger words on which the command should be fired. You have to set `/gif,/sticker` in here. Every time you write `/gif` or `/sticker`, everything after that string will be pushed zu Giphy.
<br /><br />

##### URLs
In this field you *must* enter `https://api.giphy.com/v1/`
<br /><br />

##### Send as
In this field you should define the user who sends the found gif. This is the user you defined earlier.
<br /><br />

##### Script active
This value mus be true
<br /><br />

##### GifRocket Script
Now insert the complete code of the file `GifRocket.js` into this field.
<br /><br />

#### Save changes
Now click on "SAVE CHANGES" and you're done.
<br /><br /><br /><br />

## Want to contribute? <a name="contribute"></a>
If you have any ideas on how to make this script way better, feel free to contact us. We would love to add more features. Let's improve this work together!
<br /><br /><br /><br />

## Team <a name="team"></a>
Manuel Bachl (<m.bachl@finndrop.de>)<br />
Thies Schneider (<t.schneider@finndrop.de>)
<br /><br /><br /><br />

## Copyright & License <a name="license"></a>
![Finndrop Studios][finndroplogo]
<br />
Copyright (c) 2016 „[Finndrop Studios][finndrop]“
<br /><br />
Licensed under the [MIT license][license].

<!-- links -->
[rocketchat]: https://rocket.chat/ "Rocket.Chat"
[source]: https://git.finndrop-office.de/plugins/servlet/archive/projects/FDS/repos/gifrocket?at=refs%2Fheads%2Fmaster "Download GifRocket"
[finndrop]: https://www.finndrop.de "Finndrop Studios"
[license]: license/LICENSE-MIT.txt "MIT License"

<!-- images -->
[finndroplogo]: images/finndroplogo.png "Finndrop Studios"

