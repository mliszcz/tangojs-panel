
import * as actions from '../src/actions'
import * as reducers from '../src/reducers'

import * as chai from 'chai'

chai.should()

describe('reducers.widgets', () => {

  describe('ADD_WIDGET', () => {
    it('should add widget to the empty collection', () => {
      const state = reducers.widgets(undefined, actions.addWidget('div', {}, {}))
      state['1'].tag.should.equal('div')
    })
  })
})
