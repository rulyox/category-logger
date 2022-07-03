export const getTimeString = () => {
    const time = new Date();

    const year = time.getFullYear();
    const month = ('0' + (time.getMonth() + 1)).slice(-2);
    const date = ('0' + time.getDate()).slice(-2);
    const hours = ('0' + time.getHours()).slice(-2);
    const minutes = ('0' + time.getMinutes()).slice(-2);
    const seconds = ('0' + time.getSeconds()).slice(-2);

    return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};
