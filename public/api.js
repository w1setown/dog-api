class DogAPI {
    static async getAllBreeds() {
        const cached = Cache.get('allBreeds');
        if (cached) return cached;

        const response = await fetch(`${CONFIG.API_URL}${CONFIG.ENDPOINTS.ALL_BREEDS}`);
        const data = await response.json();
        Cache.set('allBreeds', data);
        return data;
    }

    static async getBreedImages(breed) {
        const cached = Cache.get(`images_${breed}`);
        if (cached) return cached;

        const endpoint = CONFIG.ENDPOINTS.BREED_IMAGES.replace('{breed}', breed);
        const response = await fetch(`${CONFIG.API_URL}${endpoint}`);
        const data = await response.json();
        Cache.set(`images_${breed}`, data);
        return data;
    }
}
