document.addEventListener('DOMContentLoaded', function () {
  var header = document.getElementById('site-header');
  var footer = document.getElementById('site-footer');
  if (header) {
    fetch('partials/header.html').then(function (r) { return r.text(); }).then(function (html) {
      header.innerHTML = html;
    });
  }
  if (footer) {
    fetch('partials/footer.html').then(function (r) { return r.text(); }).then(function (html) {
      footer.innerHTML = html;
    });
  }
});
