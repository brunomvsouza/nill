/**
 *  Nill - Nano Image Lazy Loader
 *  @version 1.0.0.fuckie7-
 *  @author Bruno Souza http://brunosouza.info/en/
 *  Project: https://github.com/brunomvsouza/nill
 *
 *  Raw JavaScript images lazyloading with HTML5 data attributes.
 *  Copyright 2013. MIT licensed.
 */
window.nill = (function (window, document) {

  'use strict';

  /**
   * Nill's image queue
   */
  var imageQueue = [],

  /**
   * You may need to change this for compliance
   * to your html
   */
  imageSrcAttribute = 'data-nill';

  /**
   * Add image to the queue
   */
  var enqueue = function($elm) {
    imageQueue.push($elm);
  };

  /**
   * Remove image from the queue
   * Usually when the is already loaded
   */
  var dequeue = function (index) {
    imageQueue.splice(index, 1);
  };

  /**
   * Checks if $elm is visible on the screen
   */
  var isVisible = function ($elm) {
    var coords = $elm.getBoundingClientRect();
    return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= 
      (window.innerHeight || document.documentElement.clientHeight));
  };

  /**
   * Changing src attribute logic
   */
  var downloadImage = function($img, callback) {
    $img.src = $img.getAttribute(imageSrcAttribute);
    if (typeof callback === 'function') {
      callback();
    }
  };

  /**
   * Handle images and callbacks on browser events
   */
  var eventHandler = function() {
    var $currentImage;
    for (var i = 0; i < imageQueue.length; i++) {
      $currentImage = imageQueue[i];
      if (isVisible($currentImage)) {
        downloadImage($currentImage, function() {
          dequeue(i);
        });
      }
    }
  };

  /**
   * Initiate Nill
   */
  var $imgs = document.querySelectorAll('img[' + imageSrcAttribute + ']');
  for (var i = 0; i < $imgs.length; i++) {
    enqueue($imgs[i]);
  }

  /**
   * Bind browser events
   */
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', eventHandler, false);
  } else {
    window.onload = eventHandler;
  }
  window.onscroll = eventHandler;

})(window, document);

