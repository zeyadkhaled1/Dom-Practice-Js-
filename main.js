//Header Tags
let header = document.createElement("header");
let headerLogo = document.createElement("div");
let headerList = document.createElement("ul");
let headerListItem1 = document.createElement("li");
let headerListItem2 = document.createElement("li");
let headerListItem3 = document.createElement("li");
let headerListItem4 = document.createElement("li");
//Header Classes
header.className = "website-head";
headerLogo.className = "logo";
headerList.className = "menu";

//Adding Text Content to Header
headerLogo.textContent = "Zeyad";
headerListItem1.textContent = "Home";
headerListItem2.textContent = "About";
headerListItem3.textContent = "Service";
headerListItem4.textContent = "Contact";

// Body Tags
let mainDiv = document.createElement("div");
let product = document.createElement("div");
let productSpan = document.createElement("span");

//Body Classes
mainDiv.className = "content"
product.className = "product"

//Body Text Content
let BodyText = document.createTextNode("Product");
productSpan.textContent = "1";

// Footer Tags
let Footer = document.createElement("footer");
let Footertxt = document.createTextNode("Copyright 2021")

//Footer Classes
Footer.className = "footer";



//Adding Elements To the Body
document.body.prepend(Footer);
document.body.prepend(mainDiv);
document.body.prepend(header);
header.appendChild(headerLogo);
header.appendChild(headerList);
headerList.appendChild(headerListItem1);
headerList.appendChild(headerListItem2);
headerList.appendChild(headerListItem3);
headerList.appendChild(headerListItem4);
mainDiv.appendChild(product);
product.appendChild(productSpan);
productSpan.after(BodyText);
for (let i = 0; i < 14; i++) {
    let Clone = product.cloneNode(true);
    Clone.style.cssText = "padding:20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px;";
    Clone.firstChild.textContent = i + 2;
    Clone.firstChild.style.cssText = "font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px;margin-top:10px";

    mainDiv.appendChild(Clone);
}
Footer.appendChild(Footertxt);


//Header Styles
document.body.style.cssText = "margin:0px;background-color:rgb(236,236,236);font-family:Tahoma,Arial;min-height:100vh";
header.style.cssText = "display:flex;padding:20px;background-color:rgb(255,255,255);justify-content:space-between;align-items:center;";
headerLogo.style.cssText = "font-weight:bold;color:rgb(35,169,110);font-size:26px;";
headerList.style.cssText = "padding:0px;margin:0px;display:flex;list-style:none;";
[...headerList.children].forEach(element => {
    element.style.cssText = "padding:5px;color:#000000b3";
});
//Body style
mainDiv.style.cssText = "display:flex;padding:20px;flex-wrap:wrap;justify-content:center;gap:20px;min-height:calc(100vh - 142px);box-sizing:border-box;";
product.style.cssText = "padding:20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc((100% - 40px) / 3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px;";
productSpan.style.cssText = "font-size:40px;color:black;font-weight:normal;display:block;margin-bottom:10px;margin-top:10px";
Footer.style.cssText = "background-color:rgb(35,169,110);font-size:26px;text-align:center;padding:20px;color:rgb(255,255,255);"
