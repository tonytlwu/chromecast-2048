# hello-cast-text-ios

This Hello Text demo application shows how an iOS sender application can send and receive text messages.  For simplicity this app is not fully compliant with the UX Checklist. 

## Dependencies
* iOS Sender API library : can be downloaded here at: [https://developers.google.com/cast/docs/downloads/](https://developers.google.com/cast/docs/downloads/ "iOS Sender API library")

## Setup Instructions
* Get a Chromecast device and get it set up for development: https://developers.google.com/cast/docs/developers#Get_started
* Host the receiver/receiver.html on your web server (You can use Google Drive to host your files: [https://googledrive.com/host/0B716ywBKT84AMXBENXlnYmJISlE/GoogleDriveHosting.html](https://googledrive.com/host/0B716ywBKT84AMXBENXlnYmJISlE/GoogleDriveHosting.html "Google Drive Hosting"))
* Register an application on the Developers Console [http://cast.google.com/publish](http://cast.google.com/publish "Google Cast Developer Console"). Select the Custom Receiver option and specify the URL to where you are hosting the receiver.html file. You will get an App ID when you finish registering your application.
* Setup the project dependencies in xCode
* In HTGCViewController.m, replace @"YOUR\_APP\_ID\_HERE" with your app identifier from the Google Cast Developer Console. When you are done, it will look something like: 
  * static NSString *const kReceiverAppID = @"1234ABCD";

## Documentation
Google Cast iOS Sender Overview:  [https://developers.google.com/cast/docs/ios_sender](https://developers.google.com/cast/docs/ios_sender "Google Cast iOS Sender Overview")

## References and How to report bugs
* Cast APIs: [https://developers.google.com/cast/](https://developers.google.com/cast/ "Google Cast Documentation")
* Google Cast Design Checklist [http://developers.google.com/cast/docs/design_checklist](http://developers.google.com/cast/docs/design_checklist "Google Cast Design Checklist")
* If you find any issues, please open a bug here on GitHub
* Question are answered on [StackOverflow](http://stackoverflow.com/questions/tagged/google-cast)

## How to make contributions?
Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md)

## License
See [LICENSE](LICENSE)

## Google+
 +Google Cast Developers Community on Google+ [http://goo.gl/TPLDxj](http://goo.gl/TPLDxj)
