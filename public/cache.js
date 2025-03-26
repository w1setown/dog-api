class Cache {
    static set(key, data) {
        const item = {
            data,
            timestamp: new Date().getTime()
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    static get(key) {
        const item = localStorage.getItem(key);
        if (!item) return null;

        const parsedItem = JSON.parse(item);
        const now = new Date().getTime();
        
        if (now - parsedItem.timestamp > CONFIG.CACHE_TIME) {
            localStorage.removeItem(key);
            return null;
        }
        return parsedItem.data;
    }
}