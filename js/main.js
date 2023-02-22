function login() {
    let userInput = prompt("パスワードを入力して下さい:","");
    fetch(`https://script.google.com/macros/s/AKfycbyyyTPAO3dET-dRGd3yrSD7_cz-APrMZLp0mu6BATjqxAV9AUfDxNwaicCpIec5w4Aw/exec?password=${userInput}`, {
        method: "GET"
    })
    .then(response => {
        if (response.ok) return response.json();
        throw new Error('Network response was not ok.');
    })
    .then(result => {
        let link = JSON.stringify(result.link)
        link = link.slice(1);
        link = link.slice(0, -1);
        location.href = link;
    })
    .catch(error => {
        alert(error);
    })
}