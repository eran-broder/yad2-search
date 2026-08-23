const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export const createRateLimiter = ({ minIntervalMs }) => {
    let tail = Promise.resolve();
    let lastStartedAt = 0;
    const waitTurn = async () => {
        const elapsed = Date.now() - lastStartedAt;
        const remaining = minIntervalMs - elapsed;
        if (remaining > 0)
            await delay(remaining);
        lastStartedAt = Date.now();
    };
    return (task) => {
        const result = tail.then(waitTurn).then(task);
        tail = result.then(() => undefined, () => undefined);
        return result;
    };
};
