function submitForm() {
    var formData = new FormData(document.getElementById("myForm"));
    var data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });
    fetch("https://script.google.com/macros/s/AKfycbzDEP78QP8vhZWNEHimoSzlwACkLZe-rosQHEE5uM8O0OgelI8DtWZRn6zsmRGRZrAD/exec", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => {
        console.error('Erreur :', error);
        alert('Une erreur s\'est produite lors de l\'envoi du formulaire.');
    });
}
