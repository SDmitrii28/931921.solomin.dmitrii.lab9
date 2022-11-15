const labelText = document.querySelector('#editText');
let btn = document.querySelectorAll('button');
let d = document.querySelector('.container').innerHTML.split('');


  Array.prototype.randomColor = function() {
    let html = '';
    this.map( (letter) => {
      let color = "red";
      html +=
        "<span style=\"color:" + color + "\">"
        + letter +
        "</span>";
    }) 
    return html;
  };
  //document.querySelector('.container').innerHTML = d.randomColor();

const addElem = (n) => {
    let k=labelText.value.toString().length;
    let str=labelText.value;
    console.log(str);
    document.querySelector('#editText').innerHTML = labelText.innerHTML.split('').randomColor();
    console.log(labelText.value.toString().length);
    if(labelText.value==0 && n!="." && labelText.value.toString().length<2){
        labelText.value=n;
    }
    else
        labelText.value+=n;
}

const addZnak = (n) => {
    labelText.value+=" " + n + " ";
}

const equal = () => {
    labelText.value = eval(labelText.value.toString());
}

const clearAll = () => {
    labelText.value="0";
}
const removeLast = () => {
    let textContent = labelText.value.toString();
    if(textContent[textContent.length-2]==" "){
        labelText.value = textContent.substring(0,textContent.length-1);
        textContent = labelText.value.toString();
    }
    labelText.value = textContent.substring(0,textContent.length-1);
}
