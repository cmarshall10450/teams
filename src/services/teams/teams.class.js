const { Service } = require('feathers-objection');

exports.Teams = class Teams extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
