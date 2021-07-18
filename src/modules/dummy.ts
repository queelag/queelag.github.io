import { Library } from '../definitions/types'

export class Dummy {
  static get library(): Library {
    return {
      description: '',
      name: ''
    }
  }
}
