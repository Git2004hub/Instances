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

    const tableBody = document.querySelector('#instancesTable tbody');
    tableBody.innerHTML = '';

    if (instances.length > 0) {
        instances.forEach(instance => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${instance.code}</td>
                <td>${instance.designation}</td>
                <td>${instance.proprietaire}</td>
                <td>${instance.ownership}</td>
                <td style="min-width: 80px;">${instance.dateCreation}</td>
                <td style="min-width: 80px;">${instance.dateCloture}</td>
                <td>${instance.observation}</td>
                <td><button onclick="confirmDeletion('${instance.id}')" class="deleteButton">Supprimer</button></td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        tableBody.innerHTML = '<tr><td colspan="8">Aucune donnée disponible.</td></tr>';
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
