var x = 0;
document.write("<h1>While Loop</h1>");
document.write("<ul>");
while (x < 10) {
  document.write(`<li> x is currently: ${x}</li>`);
  x++;
}
document.write("</ul>");
document.write("<h1>For Loop</h1>");
document.write("<ul>");
for (let i = 0; i < 10; i++) {
  document.write(`<li> i is currently: ${i}</li>`);
}
document.write("</ul>");
