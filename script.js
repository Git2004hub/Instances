document.addEventListener('DOMContentLoaded', (event) => {
    const randomNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    document.getElementById('code').value = 'CODE-' + randomNumber;

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