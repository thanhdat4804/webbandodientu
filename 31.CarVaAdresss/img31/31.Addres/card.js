document.addEventListener('DOMContentLoaded', function () {
    const visacard = document.getElementById('visacard');
    const optionsContainer = document.getElementById('options');
    const editCardButton = document.getElementById('editCard');
    const deleteCardButton = document.getElementById('deleteCard');

    visacard.addEventListener('click', function () {
        // Calculate the position to place the options container between the cards
        const visaRect = visacard.getBoundingClientRect();
        const mastercard = document.getElementById('mastercard');
        const mastercardRect = mastercard.getBoundingClientRect();
        
        const midPointX = (visaRect.right + mastercardRect.left) / 2 - 60;
        const midPointY = (visaRect.bottom + mastercardRect.top) / 2 - 40;

        optionsContainer.style.left = `${midPointX}px`;
        optionsContainer.style.top = `${midPointY}px`;
        
        // Toggle the display of the options container
        if (optionsContainer.style.display === 'none' || optionsContainer.style.display === '') {
            optionsContainer.style.display = 'flex';
        } else {
            optionsContainer.style.display = 'none';
        }
    });

    editCardButton.addEventListener('click', function () {
        alert('Edit Card button clicked');
    });

    deleteCardButton.addEventListener('click', function () {
        alert('Delete Card button clicked');
    });

    // Hide options when clicking outside
    document.addEventListener('click', function (event) {
        if (!optionsContainer.contains(event.target) && event.target !== visacard) {
            optionsContainer.style.display = 'none';
        }
    });
});
