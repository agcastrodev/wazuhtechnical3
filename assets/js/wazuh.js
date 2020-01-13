/**
 * Change visible product card, and update mobile and desktop UI elements
 * accordingly.
 * @param {string} selectedSelector CSS selector for selected product
 */
function changeProduct(selectedSelector){
  const currentSelector = "#" + $(".wazuh-current-product").attr("id");
  let currentTab = $("a[href='"+currentSelector+"'].wazuh-tab-link").parent()[0];
  let selectedTab = $("a[href='"+selectedSelector+"'].wazuh-tab-link").parent()[0];
  switchTabs(currentTab, selectedTab);
  updateArrows(selectedSelector);
  switchProducts(currentSelector, selectedSelector);
}

/**
 * Switch the current tab and the tab selected by the user
 * @param {DOMElement} current Product tab currently active
 * @param {DOMElement} selected Product tab about to be active
 */
function switchTabs(current, selected){
  $(current).removeClass("wazuh-tab-active");
  $(current).addClass("wazuh-tab-light");

  $(selected).removeClass("wazuh-tab-light");
  $(selected).addClass("wazuh-tab-active");
}

/**
 * Switch the current product box and the product box selected by the user
 * @param {string | DOMElement} current Product box currently visible
 * @param {string | DOMElement} selected Product box about to be visible
 */
function switchProducts(current, selected){
  $(current).removeClass("wazuh-current-product");
  $(current).addClass("wazuh-hidden-product");

  $(selected).addClass("wazuh-current-product");
  $(selected).removeClass("wazuh-hidden-product");
}

/**
 * Update mobile arrows links and mobile product selector title
 * @param {string} selected CSS selector of a product ID
 */
function updateArrows(selected){
  $("#product-prev").attr("href", previousSelector(selected));
  $("#product-next").attr("href", nextSelector(selected));
  const title = $(selected).find("h3").html();
  $("#slider-title").html(title);
}

/**
 * Get the CSS selector of the previous product box
 * @param {string} selector CSS selector of a product ID
 */
function previousSelector(selector){
  let number = parseInt(selector.slice(-1));
  number = (number - 1) % 4;
  if(number == 0){
    number = 4;
  }
  return "#product"+number;
}

/**
 * Get the CSS selector of the next product box
 * @param {string} selector CSS selector of a product ID
 */
function nextSelector(selector){
  let number = parseInt(selector.slice(-1));
  number = (number + 1) % 4;
  if(number == 0){
    number = 4;
  }
  return "#product"+number;
}

/**
 * Event responder for mobile product-select arrows
 * @param {Event} event Click event
 */
function onArrowClicked(event){
  const selected = $(event.currentTarget).attr("href");
  changeProduct(selected);
  event.preventDefault();
}


(function( $ ) {
  'use strict';

  $(function() {

    $("#searchbutton").click(function(event){
      $("#searchbox").focus().toggleClass("wazuh-active-width").val('');
    });

    $(".wazuh-tab").click( function(event){
      const selected = $(event.currentTarget).find("a").attr("href");
      changeProduct(selected);
      event.preventDefault();
    });

    $("#product-prev").click(onArrowClicked);
    $("#product-next").click(onArrowClicked);
  });

})( jQuery );