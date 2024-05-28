function twoSum(array, target) {
    // Initialisation de la table de hachage 
    const numIndices = {};

    // Parcourir chaque élément du tableau
    for (let i = 0; i < array.length; i++) {
        // Calculer le complément
        const complement = target - array[i];

        // Vérifier si le complément est déjà dans la table de hachage  U
        if (numIndices.hasOwnProperty(complement)) {
            // Si oui, retourner les indices
            return [numIndices[complement], i];
        }

        // Sinon, ajouter l'élément actuel à la table de hachage avec son indice
        numIndices[array[i]] = i;
    }

    // Si aucune solution n'est trouvée (ce qui ne devrait pas arriver selon l'énoncé), retourner null
    return null;
}

// Exemple de test
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Devrait afficher [0, 1]

