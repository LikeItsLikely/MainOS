var mainosprograms = [];
mainosprograms.push("gallery,Program Files/Galerie/exec.html,Program Files/Galerie/icon.png");
mainosprograms.push("excel,Program Files/excel/exec.html,Program Files/excel/icon.png");
mainosprograms.push("explorer,Program Files/Explorer/inner/exec.html,Program Files/Explorer/inner/na.png");

var linpronr = 0;
while(linpronr < mainosprograms.length) {
  var thisprogram = mainosprograms[linpronr].split(",");
  progadd(thisprogram[0], "C:/Program Files/" + thisprogram[0] + ".xec", thisprogram[1], thisprogram[2] + "<br>");
  linpronr++;
}
