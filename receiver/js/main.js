// TODO: Refactor to fit in with 2048 code
window.onload = function() {
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
}