const fs = require('fs');

const data = fs.readFileSync('../manifest.json', {encoding : 'utf-8'});
let dataObj = JSON.parse(data);


document.getElementById('myCheckBox').addEventListener('click', function () {
    var checked = this.checked;

    if (checked) {
        alert("hh");
    } else {
        alert("gg");
    }
});​
