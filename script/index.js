// This is for the HTML tab
document.getElementById("html-btn").addEventListener("click", function () {
  document.getElementById("tab-text").innerHTML =
    "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.";

  document.getElementById("tab-title").innerHTML = "HyperText Markup Language";

  document.getElementById("html-btn").style.backgroundColor = "#ff9b51";
  document.getElementById("css-btn").style.backgroundColor = "#333333";
  document.getElementById("js-btn").style.backgroundColor = "#333333";
});

// This is for the CSS tab
document.getElementById("css-btn").addEventListener("click", function () {
  document.getElementById("tab-text").innerHTML =
    "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.";

  document.getElementById("tab-title").innerHTML =
    "Cascading Style Sheets (CSS)";

  document.getElementById("css-btn").style.backgroundColor = "#ff9b51";
  document.getElementById("html-btn").style.backgroundColor = "#333333";
  document.getElementById("js-btn").style.backgroundColor = "#333333";
});

// This is for the JavaScript tab
document.getElementById("js-btn").addEventListener("click", function () {
  document.getElementById("tab-text").innerHTML =
    "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it.";

  document.getElementById("tab-title").innerHTML =
    "JavaScript (JS) Programming Language";

  document.getElementById("js-btn").style.backgroundColor = "#ff9b51";
  document.getElementById("html-btn").style.backgroundColor = "#333333";
  document.getElementById("css-btn").style.backgroundColor = "#333333";
});
