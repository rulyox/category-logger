import CategoryLogger from '../dist';

export enum Categories {
    API,
    DATA,
    ERROR,
}

const categoryColors = new Map([
    [Categories.API, '#1976D2'], // blue
    [Categories.DATA, '#388E3C'], // green
    [Categories.ERROR, '#D32F2F'], // red
]);

const logger = new CategoryLogger(Categories, categoryColors, true);
export default logger;
