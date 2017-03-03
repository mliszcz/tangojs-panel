
import * as actions from '../src/actions'
import * as reducers from '../src/reducers'

import * as chai from 'chai'

chai.should()

describe('reducers.widgets', () => {

  describe('ADD_WIDGET', () => {

    const addWidget = (state, tag) =>
      reducers.widgets(state, actions.addWidget(tag, {}, {}))

    it('should add widget to an empty collection', () => {
      const state = addWidget(undefined, 'div1')
      const values = Object.values(state)
      values.should.have.lengthOf(1)
      values[0].tag.should.equal('div1')
    })

    it('should add widget to a non-empty collection', () => {
      const state = addWidget(addWidget(undefined, 'div1'), 'div2')
      Object.entries(state).should.have.lengthOf(2)
    })

  })
})
