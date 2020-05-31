const { Service } = require('feathers-objection');

exports.Channels = class Channels extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
