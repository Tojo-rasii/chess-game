document.addEventListener("DOMContentLoaded", function () {
    initializeBoard();
});

let selectedPiece = null;

function initializeBoard() {
    const columns = document.querySelectorAll(".column");

    columns.forEach(column => {
        column.addEventListener("click", handleColumnClick);
    });
}

// ... (votre code existant)

function handleColumnClick(event) {
    const column = event.currentTarget;
    const pieces = column.querySelectorAll("span");

    // Si une pièce est déjà sélectionnée, essayez de déplacer la pièce
    if (selectedPiece) {
        const targetSpan = event.target.closest("span");

        // Vérifiez si le mouvement est légal
        if (targetSpan && isMoveLegal(selectedPiece, targetSpan)) {
            // Déplacez la pièce vers la nouvelle position
            targetSpan.innerHTML = selectedPiece.innerHTML;
            selectedPiece.innerHTML = "";
        }

        // Réinitialisez la sélection
        selectedPiece.classList.remove("selected");
        selectedPiece = null;
    } else {
        // Sinon, sélectionnez la pièce pour un éventuel déplacement
        const clickedSpan = event.target.closest("span");
        if (clickedSpan) {
            selectedPiece = clickedSpan;
            selectedPiece.classList.add("selected");
        }
    }
}

// ... (votre code existant)


function isMoveValid(element) {
    // Ajoutez votre logique pour vérifier si le clic est sur une case valide pour déplacer une pièce
    // Par exemple, vous pouvez vérifier si la case est vide ou si elle contient une pièce du joueur actuel
    return true;
}

function isMoveLegal(startSpan, endSpan) {
    // Ajoutez votre logique pour vérifier si le mouvement est légal ici
    // Vous pouvez utiliser les attributs data-col des éléments span pour obtenir les positions
    // Exemple : const startCol = selectedPiece.parentElement.dataset.col;
    // N'oubliez pas de considérer les règles spécifiques pour chaque type de pièce
    return true; // Pour l'instant, tous les mouvements sont considérés comme légaux
}
