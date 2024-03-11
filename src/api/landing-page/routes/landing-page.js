'use strict';

/**
 * landing-page router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::landing-page.landing-page',
//middle ware is there --intimation to route via this statement
{
    config: {
        find :{
            middlewares:["api::landing-page.landing-page-populate"],
        },
        findOne :{
            middlewares:["api::landing-page.landing-page-populate"],
        }
    }
});
