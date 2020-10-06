var ready = function (cb){
  //Check if 'document' is loaded complaty
  document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", function(e){
    cb();
  })
  : cb();
};

// Usage
ready(function(){
  
  // Toggler sitenav on site-header__toggler--open click
  var elSiteHeaderTogglerOpen = document.querySelector('.site-header__toggler--open');
  var elSiteHeaderTogglerClose = document.querySelector('.site-header__toggler--close');
  var elSitenav = document.querySelector('.site-nav__body');

  elSiteHeaderTogglerOpen.addEventListener('click', function() {
    elSitenav.classList.toggle('site-nav--open');
  });

  elSiteHeaderTogglerClose.addEventListener('click', function() {
    if (elSitenav.classList.toggle('site-nav--open') === 'site-nav--open'){
      elSitenav.classList.toggle('')
    }
  });

});