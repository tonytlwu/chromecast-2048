// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

// TODO: Refactor to fit in with 2048 code
window.addEventListener("load",function(){
    console.log("Window loaded");
    window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
    window.castReceiverManager.onSenderDisconnected = function(event) {
        if(window.castReceiverManager.getSenders().length == 0 &&
            event.reason == cast.receiver.system.DisconnectReason.REQUESTED_BY_SENDER) {
            window.close();
        }
    }

    var customMessageBus = castReceiverManager.getCastMessageBus('urn:x-cast:com.twjg.chromecast2048');
    customMessageBus.onMessage = function(event) {
        document.getElementById("debug-text").innerHTML = event.data;
    }

    // Start receiver
    window.castReceiverManager.start();
});