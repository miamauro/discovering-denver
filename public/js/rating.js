var Rating = function () {
  var self = {};

  self.stars = [{}, {}, {}, {}, {}];
  var current = null;

  self.click = function (s) {
    if (!s.selected) {
      current = null;
    }

    var index = self.stars.indexOf(s);
    for (var i = 0; i < self.stars.length; i++) {
      if (i <= index && s !== current) {
        self.stars[i].selected = 1;
        self.stars[i].el.style.color = "#ff3939";
      } else {
        self.stars[i].selected = 0;
        self.stars[i].el.style.color = "";
      }
    }

    current = s;
    const hiddenDiv = document.createElement("div");
    hiddenDiv.setAttribute("id", "rating");
    hiddenDiv.setAttribute("style", "display:none");
    hiddenDiv.textContent = index + 1;
    document.getElementById("starIndex").appendChild(hiddenDiv);
  };

  var template = ` <div @loop="self.stars" style="cursor: pointer"> 
      <i class="material-icons stars-icons"
        onclick="self.parent.click(self)">{{self.selected ? "star" : "star_outline"}}</i> </div>`;

  return lemonade.element(template, self);
};
lemonade.render(Rating, document.getElementById("root"));
