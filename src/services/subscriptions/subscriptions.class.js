const { Service } = require('feathers-objection');

exports.Subscriptions = class Subscriptions extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
