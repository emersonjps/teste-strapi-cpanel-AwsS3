'use strict';

/**
 * simulador service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::simulador.simulador');
