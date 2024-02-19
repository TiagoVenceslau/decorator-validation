
/**
 * @summary Defines the various Model keys used for reflection
 *
 * @property {string} REFLECT prefix to all other keys
 * @property {string} TYPE type key
 * @property {string} MODEL model key
 * @property {string} ANCHOR anchor key. will serve as a ghost property in the model
 *
 * @constant ModelKeys
 * @memberOf module:decorator-validation.Model
 * @category Model
 */
export enum ModelKeys  {
    REFLECT = 'model.definition.',
    TYPE = 'design:type',
    MODEL = 'model',
    ANCHOR = '__modelDefinition'
}