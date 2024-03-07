function writeToTxtFile(content, fileName) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


const content = "This is the content of the TXT file.";
const fileName = "example.txt";
writeToTxtFile(content, fileName);

function readTxtFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const content = event.target.result;
        console.log(content); 
    };
    reader.readAsText(file);
}


const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    readTxtFile(file);
});
