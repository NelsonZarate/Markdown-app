const input = document.getElementById('markdown-input');
const preview = document.getElementById('markdown-preview');

input.addEventListener('input', () => {
  const markdownText = input.value;
  const htmlContent = marked.marked(markdownText);
  preview.innerHTML = htmlContent; // Use innerHTML to display the rendered content
});
