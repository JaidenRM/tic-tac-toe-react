import { IAiLogic } from '../../models/IAiLogic'
import MyCustomAi from './myCustomAi'

enum AiType {
  CustomAi,
}

class AiFactory {
  static createAi(type: AiType): IAiLogic {
    switch (type) {
      default:
        return new MyCustomAi()
    }
  }
}

export default AiFactory
