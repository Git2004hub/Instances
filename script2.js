let ascending = true;

document.addEventListener('DOMContentLoaded', function() {
    loadInstances();
    document.getElementById('sortCriteria').addEventListener('change', loadInstances);
});

function loadInstances() {
    const sortCriteria = document.getElementById('sortCriteria').value;
    let instances = JSON.parse(localStorage.getItem('instances')) || [];

    if (instances.length > 0) {
        instances.sort((a, b) => {
            if (a[sortCriteria] < b[sortCriteria]) return ascending ? -1 : 1;
            if (a[sortCriteria] > b[sortCriteria]) return ascending ? 1 : -1;
            return 0;
        });
    }

    const detailsContainer = document.getElementById('instanceDetails');
    detailsContainer.innerHTML = '';

    if (instances.length > 0) {
        instances.forEach(instance => {
            const instanceDiv = document.createElement('div');
            instanceDiv.classList.add('instance-entry');
            instanceDiv.innerHTML = `
                <div class="instance-card">
                    <p><strong>Code :</strong> ${instance.code}</p>
                    <p><strong>Désignation de l'instance :</strong> ${instance.designation}</p>
                    <p><strong>Propriétaire :</strong> ${instance.proprietaire}</p>
                    <p><strong>Type de l'instance :</strong> ${instance.ownership}</p>
                    <p><strong>Date de création :</strong> ${instance.dateCreation}</p>
                    <p><strong>Date de clôture :</strong> ${instance.dateCloture}</p>
                    <p><strong>Observations :</strong> ${instance.observation}</p>
                    <button onclick="confirmDeletion('${instance.id}')" class="deleteButton">Supprimer</button>
                </div>
            `;
            detailsContainer.appendChild(instanceDiv);
        });
    } else {
        detailsContainer.innerHTML = '<p>Aucune donnée disponible.</p>';
    }
}

function confirmDeletion(id) {
    const instances = JSON.parse(localStorage.getItem('instances')) || [];
    const instanceToDelete = instances.find(instance => instance.id === id);
    const confirmationMessage = `Êtes-vous sûr de vouloir supprimer l'instance avec le code : ${instanceToDelete.code} ?`;

    if (confirm(confirmationMessage)) {
        deleteInstance(id);
    }
}

function deleteInstance(id) {
    let instances = JSON.parse(localStorage.getItem('instances')) || [];
    instances = instances.filter(instance => instance.id !== id);
    localStorage.setItem('instances', JSON.stringify(instances));
    loadInstances();
}

function toggleSortOrder() {
    ascending = !ascending;
    document.getElementById('sortOrderButton').textContent = ascending ? 'Croissant' : 'Décroissant';
    loadInstances();
}

function deleteAllInstances() {
    if (confirm("Êtes-vous sûr de vouloir supprimer toutes les instances ?")) {
        localStorage.removeItem('instances');
        loadInstances();
    }
}
