import { createComponent } from 'terezzu'

import model from './model'
import view from './view'
import controller from './controller'

const name = 'userCreator'
const app = { name, model, view, controller }
const userCreator = createComponent(app)

export { userCreator }
