let sharedData = {};

export const setSharedData = (key, value) => {
    sharedData[key] = value;
};

export const getSharedData = (key) => {
    return sharedData[key];
};