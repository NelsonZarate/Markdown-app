const input = document.getElementById('markdown-input');
const preview = document.getElementById('markdown-preview');

input.addEventListener('input', () => {
  const markdownText = input.value;
  const htmlContent = marked.marked(markdownText);
  preview.innerHTML = htmlContent; // Use innerHTML to display the rendered content
});


var saveData = (function () {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  return function (data, fileName) {
    var blob = new Blob([data], { type: "text/markdown" }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();


var markdownInput = document.getElementById("markdown-input");
var previewContainer = document.getElementById("markdown-preview");

markdownInput.addEventListener("input", function () {

  var markdownText = markdownInput.value;
  previewContainer.innerHTML = marked(markdownText);
});

// Handle download button click
document.getElementById('downloadBtn').addEventListener('click', function() {
  var markdownContent = markdownInput.value;
  var fileName = "document.md";
  saveData(markdownContent, fileName);
});
