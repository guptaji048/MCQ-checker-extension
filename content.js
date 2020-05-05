alert("Extension Working");
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  let label = document.getElementsByClassName(
    "appsMaterialWizToggleRadiogroupGroupContainer"
  );
  let element = document.getElementsByClassName(
    "freebirdFormviewerViewItemsItemItem"
  );
  let count = 0;
  for (i = 0; i < label.length; i++) {
    if (!label[i].hasAttribute("aria-invalid")) {
      console.log(label[i]);
      count = count + 1;
      element[i].style["background-color"] = "#fab7b7";
    } else {
      element[i].style["background-color"] = "#FFFFFF";
    }
  }
  sendResponse({ counter: count });
});
