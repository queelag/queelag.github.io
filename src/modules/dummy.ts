import { Library } from '../definitions/interfaces'

export class Dummy {
  static get library(): Library {
    return {
      description: '',
      name: '',
      tags: []
    }
  }
}
