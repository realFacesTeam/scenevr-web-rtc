var webrtc = new SimpleWebRTC({

    url: 'http://localhost:8888/',
    // the id/element dom element that will hold "our" video
    localVideoEl: 'localVideo',
    // the id/element dom element that will hold remote videos
    remoteVideosEl: 'remoteVideos',
    // immediately ask for camera access
    autoRequestMedia: true
});

webrtc.on('readyToCall', function () {
    // you can name it anything
    webrtc.joinRoom('rorysRoom89');

});
