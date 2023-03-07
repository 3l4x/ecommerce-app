module.exports = {
    logger: async (arr) => {
        await Promise.all(arr.map(async (fn) => {
            try {
                await fn();
            } catch (err) {
                console.log(err);
            }
        }));
    },
};