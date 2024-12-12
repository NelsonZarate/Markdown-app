// Text to Markdown Format script
const input = document.getElementById('markdown-input');
const preview = document.getElementById('markdown-preview');

input.addEventListener('input', () => {
  const markdownText = input.value;
  const htmlContent = marked.marked(markdownText);
  preview.innerHTML = htmlContent; 
});


// Scroll sync script
let isScrollingFromInput = false;
let isScrollingFromPreview = false;

input.addEventListener('scroll', () => {
  if (isScrollingFromPreview) return; 
  isScrollingFromInput = true;

  const scrollRatio = input.scrollTop / (input.scrollHeight - input.clientHeight);
  preview.scrollTop = scrollRatio * (preview.scrollHeight - preview.clientHeight);

  isScrollingFromInput = false;
});

preview.addEventListener('scroll', () => {
  if (isScrollingFromInput) return; 
  isScrollingFromPreview = true;

  const scrollRatio = preview.scrollTop / (preview.scrollHeight - preview.clientHeight);
  input.scrollTop = scrollRatio * (input.scrollHeight - input.clientHeight);

  isScrollingFromPreview = false;
});


// Download button script
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


document.getElementById('downloadBtn').addEventListener('click', function() {
  var markdownContent = input.value;
  var fileName = "Markdown.md";
  saveData(markdownContent, fileName);
});