console.log("youtube extension is running")

//querySelector constants
//if the website changes and we have to chanage the queryselectors, these constants should make that easier

qs_QueryExample = "html"



const observer = new MutationObserver(function() {
  if (reformatURL(document.URL) !== "https://www.youtube.com/"){
    observer.disconnect();
  }
  console.log("hello")
  //advertisement?.remove()
    // Select the element
    
    const elementToDelete = document.querySelectorAll('#rendering-content');
    const elementToDelete2 = document.querySelectorAll("#content > ytd-rich-shelf-renderer");
    const elementToChange = document.querySelectorAll("#primary > ytd-rich-grid-renderer")
    
    //const text = document.querySelectorAll("#video-title") title


    // Check if the element exists
    if (elementToChange) {
      //change row
      elementToChange.forEach(function(element){
        element.style.setProperty("--ytd-rich-grid-posts-per-row", "3");
        element.style.setProperty("--ytd-rich-grid-items-per-row", "3");
       // element.hide()
        console.log(element)
      });
      }

    if (elementToDelete2) {
      // Remove the element from the DOM
      elementToDelete2.forEach(function(element){
        element.style.display = "none"
       // element.hide()
        console.log(element)
      });
      }

    if (elementToDelete) {
        // Remove the element from the DOM
        elementToDelete.forEach(function(element){
          element.style.display = "none"
          element.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none"
          // Set the value of the CSS custom property directly on the document's root element

          console.log("parent" + element.parentElement) //.setProperty("--ytd-rich-grid-posts-per-row", "2")
  
          console.log(element)
        });
        }
    else{
      console.log("ELEMENT DOES NOT EXIST")
    }
})
observer.observe(document.body, { childList: true, subtree: true });


//Remove query strings (?) and fragment identifier (#)
//Returns string
function reformatURL(url){
  let result = url

  //remove query strings
  const queryStringIndex = result.indexOf('?')
  if (queryStringIndex !== -1){
    result = result.slice(0, queryStringIndex)
  } 
  
  //remove fragment identifiers
  const fragmentIndex = url.indexOf('#')
  if (fragmentIndex !== -1){
    result = result.slice(0, fragmentIndex)
  } 

  return result
}

//wait until user settings are obtained
chrome.storage.local.get(null, (settings) => {

})
