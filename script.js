const formatButtons = document.querySelectorAll('.format-button');
const colorButtons = document.querySelectorAll('.color-button');
const editorContent = document.getElementById('editorContent');

formatButtons.forEach(button => {
    button.addEventListener('click', () => {
        const command = button.getAttribute('data-command');
        document.execCommand(command, false, null);
    });
});

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        document.execCommand('foreColor', false, color);
    });
});

editorContent.addEventListener('input', () => {
   
});
