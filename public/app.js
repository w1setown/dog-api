document.addEventListener('DOMContentLoaded', async () => {
    Navigation.init();
    try {
        const breeds = await DogAPI.getAllBreeds();
        UI.displayBreedList(breeds.message);

        document.getElementById('breed-select').addEventListener('change', async (e) => {
            if (!e.target.value) return;
            
            try {
                const images = await DogAPI.getBreedImages(e.target.value);
                UI.displayImages(images.message);
            } catch (error) {
                console.error('Error loading images:', error);
            }
        });
    } catch (error) {
        console.error('Error loading breeds:', error);
    }
});