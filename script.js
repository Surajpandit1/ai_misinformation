function analyzeText() {
    const inputText = document.getElementById("newsInput").value.trim();
    const outputBox = document.getElementById("outputBox");

    if (inputText === "") {
        outputBox.innerHTML = "<p>Please enter some text to analyze. $</p>";
        return;
    }

    // Simulated Al detection (replace with real model/API later)
    const fakeProbability = Math.random(); // Generates number between  and 1
    const verdict = fakeProbability > 0.6 ? "A Likely Misinformation" : "✔Likely Accurate";

    outputBox.innerHTML =
        `<p><strong>Analysis Complete:</strong></p>
        <p><strong>Fake Probability:</strong> ${(fakeProbability * 100).toFixed(2)}%</p>
        <p><strong>Verdict:</strong> ${verdict}</p>`;
}