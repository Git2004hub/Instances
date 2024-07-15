document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('code').value = generateRandomCode();

    const dateCreationInput = document.getElementById('dateCreation');
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0];
    dateCreationInput.value = todayStr;
});

document.getElementById('instanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dateCreation = document.getElementById('dateCreation').value;
    const dateCloture = document.getElementById('dateCloture').value;
    if (dateCloture && dateCloture < dateCreation) {
        document.getElementById('error-message').style.display = 'block';
        return;
    }

    const instanceData = {
        id: Date.now().toString(), // Utilisation de l'heure actuelle comme ID unique
        code: document.getElementById('code').value,
        designation: document.getElementById('designation').value,
        proprietaire: document.getElementById('proprietaire').value,
        ownership: document.querySelector('input[name="ownership"]:checked').value,
        dateCreation: dateCreation,
        dateCloture: dateCloture,
        observation: document.getElementById('observation').value
    };

    let instances = JSON.parse(localStorage.getItem('instances')) || [];
    instances.push(instanceData);
    localStorage.setItem('instances', JSON.stringify(instances));
    
    window.location.href = 'listeInstances.html';
});

function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';

    for (let i = 0; i < 3; i++) {
        const randomLetterIndex = Math.floor(Math.random() * letters.length);
        result += letters.charAt(randomLetterIndex);
    }

    for (let i = 0; i < 6; i++) {
        const randomDigit = Math.floor(Math.random() * 10);
        result += randomDigit;
    }

    return result;
}