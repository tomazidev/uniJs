// The element to attach the listener to
var buttonWrapper = document.getElementById('button-wrapper');

buttonWrapper.addEventListener('click', function (event) {
    var attr = event.target.getAttribute('data-action');
    console.log(attr);
});

