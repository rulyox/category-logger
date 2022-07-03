import logger, { Categories } from './logger';

setTimeout(() => {
    logger.log(Categories.API, 'GET /user');
}, 0);

setTimeout(() => {
    logger.log(Categories.API, 'GET /article');
}, 1000);

setTimeout(() => {
    logger.log(Categories.DATA, 'Collected data from archive');
}, 2000);

setTimeout(() => {
    logger.log(Categories.API, 'POST /article');
}, 3000);

setTimeout(() => {
    logger.log(Categories.DATA, 'Saved data to database');
}, 4000);

setTimeout(() => {
    logger.log(Categories.ERROR, 'Exception while parsing data');
}, 5000);
