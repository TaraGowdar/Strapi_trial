'use strict';

/**
 * `landing-page-populate` middleware
 */

const populate = {
    metadata:{
      populate: {
        metaImage:{
          populate: true,
            fields: ["name", "alternativeText", "url"],
                  }
                },
              },
              blocks:{
                populate: {
                  link: {              
                    populate: true,
              },
              image: {
                fields: ["name", "alternativeText", "url"],
              },
              card: {
                populate: {
                  image: {
                    fields: ["name", "alternativeText", "url"],
                  },
                }
        },
        plan: {
          populate: ["services", "link"],
        },
        form: {
          populate: ["input", "button"],
        },
      }
    },
  };

module.exports = (/** @type {any} */ _config, { strapi }) => {
  // Add your own logic here.
  return async (/** @type {any} */ _ctx, /** @type {() => any} */ next) => {
    strapi.log.info('In landing-page-populate middleware.');
    //within our middleware we have to access our context--so update our context query
    //to inject our pre-filtered populate query object & its going to be an object
    //that will be passed to a controller which will return the data
    //from frontend we need to query the page
    //doing this wont populate the data
    //we have to add our middleware to the routes--to populate the values
    
    _ctx.query = {
      populate,
      ..._ctx.query,
    }
    await next();
  };
};
