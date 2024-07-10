function cleanText() {
    var inputText = document.getElementById("inputText").value;
    var cleanedText = inputText.replace(/\s+/g, ' ').trim();
    document.getElementById("result").innerText = cleanedText;
}
