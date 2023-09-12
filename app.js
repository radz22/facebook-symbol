
let textarea = document.getElementById("textarea")

function symbolEmoji(param){
textarea.value += param

current ()
}



function current(){
let current = document.getElementById("current-use")    
let combine = textarea.value

current.innerText = combine

}


function clearButton(){     
let textarea = document.getElementById("textarea")

textarea.value = '';


}


document.getElementById("copy").addEventListener("click", function() {
    // Get the text from the input field
    var textToCopy = document.getElementById("textarea").value;

    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        alert("Text copied to clipboard successfully")
      })
      .catch(function(error) {
        console.error("Unable to copy text to clipboard: " + error);
      });
  });