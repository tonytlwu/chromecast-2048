function Chromecast2048() {
    // See https://cast.google.com/publish/#/overview
    this.applicationID = "33AA2579";

    // Wait for Chromecast to be detected
    window['__onGCastApiAvailable'] = function(loaded, errorInfo) {
      if (loaded) {
        this.initializeCastApi();
      } else {
        console.log(errorInfo);
      }
    }.bind(this);
};

Chromecast2048.prototype = {
    // Connect to Chromecast device upon discovery
    initializeCastApi : function(){
        console.log("Initialising cast API");
        
        // Create API config with session listeners
        var sessionRequest = new chrome.cast.SessionRequest(this.applicationID);
        var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
        function(e) {
            console.log('New session ID:' + e.sessionId);
        },
        function(e){
              if (e === 'available') { console.log('receiver found'); }
              else { console.log('receiver list empty'); }
        });
    
        // Initialise Chromecast
        chrome.cast.initialize(apiConfig,
        function() {
            // Devices are available and can be connected to, lets grab a session
            console.log("initialization success, requesting session");
            chrome.cast.requestSession(function(e) {
                // Session established (receiver will have launched by this point)
                console.log('session request success');
                this.session = e;
                this.attachObservers(); // Attach click observers
            }.bind(this),
            function(e) {
                console.log('session request failure');
                console.log(e);
            });
        }.bind(this),
        function(e){
            console.log("initialization failure");
            console.log(e);
        });
    },
    // Button click observers
    attachObservers : function() {
        $(".btn").click(
        function(e) {
            var message = $(e.target).data("message");
            var sendTime = new Date().getTime();
            console.log("sending message: " + message);
            this.session.sendMessage("urn:x-cast:com.twjg.chromecast2048", message, 
            function(){ 
                console.log("send message success: " + message) 
                console.log("round trip time was: " + (new Date().getTime() - sendTime));
            },
            function(e) {
                console.log("send message failure: " + message);
                console.log(e);
            })
        }.bind(this));
    }
};

window.addEventListener('load',function(){
    window.application = new Chromecast2048();
});