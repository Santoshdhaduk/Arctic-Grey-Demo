//video section
document.addEventListener("DOMContentLoaded", function () {
  var videos = document.querySelectorAll(".youtube, .vimeo");
  function playPauseVideos() {
    videos.forEach(function (video) {
      if (section.settings.autoplay) {
        video.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          "*"
        );
      } else {
        video.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  }
  playPauseVideos();
  document
    .getElementById("section_autoplay")
    .addEventListener("change", function () {
      section.settings.autoplay = this.checked;
      playPauseVideos();
    });
});


