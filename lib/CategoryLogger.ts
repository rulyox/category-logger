import chalk, { Chalk } from 'chalk';
import { getTimeString } from './utils';

export class CategoryLogger {
    private categories: Record<number, string>;
    private categoryMaxLength: number;
    private chalkMap: Map<number, Chalk>;
    private showTime: boolean;

    constructor(categories: Record<number, string>, colorMap: Map<number, string>, showTime: boolean) {
        let categoryMaxLength = 0;
        for (const category in categories) {
            if (categoryMaxLength < category.length) categoryMaxLength = category.length;
        }

        const chalkMap = new Map<number, Chalk>();
        for (const [category, color] of colorMap.entries()) {
            const chalkInstance = chalk.bold.hex(color);
            chalkMap.set(category, chalkInstance);
        }

        this.categories = categories;
        this.categoryMaxLength = categoryMaxLength;
        this.chalkMap = chalkMap;
        this.showTime = showTime;
    }

    public log(category: number, message: string) {
        const categoryString = this.categories[category];
        const chalkInstance = this.chalkMap.get(category);
        if (categoryString === undefined || chalkInstance === undefined) throw new Error('Category does not exist!');
        const categoryPrefix = chalkInstance(categoryString.padEnd(this.categoryMaxLength));

        if (this.showTime) {
            const time = getTimeString();
            console.log(`${time} | ${categoryPrefix} ${message}`);
        } else {
            console.log(`${categoryPrefix} ${message}`);
        }
    }
}
