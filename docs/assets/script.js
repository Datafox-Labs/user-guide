// Function for executing code on document ready
function domReady(callback) {
  if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

domReady(function () {
  new Viewer(document.querySelector('.blog-post'));
});
