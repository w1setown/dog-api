class Filters {
    static filterBreedsBySearchTerm(breeds, searchTerm) {
        const term = searchTerm.toLowerCase();
        return Object.keys(breeds).filter(breed => 
            breed.toLowerCase().includes(term)
        );
    }

    static sortBreeds(breeds, sortOrder = 'asc') {
        return breeds.sort((a, b) => {
            return sortOrder === 'asc' ? 
                a.localeCompare(b) : 
                b.localeCompare(a);
        });
    }
}