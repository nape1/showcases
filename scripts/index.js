
window.onload = function() {
    console.log('window onload');
};

document.addEventListener('DOMContentLoaded', function() {
    console.log(window.location.href,'DOMContentLoaded');
});

include('routes.js')

