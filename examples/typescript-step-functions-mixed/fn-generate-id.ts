const generate = () => Math.random().toString(36).substring(7);

export const handler = async () => ({ value: generate() });