import { connect } from 'react-redux'
import Components_Counter from '../components/Counter'
import { onIncrement, onDecrement } from '../state/actions/counter'

const mapStateToProps = (state) => ({
  value: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement () {
    dispatch(onIncrement())
  },
  onDecrement () {
    dispatch(onDecrement())
  }
})

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Components_Counter)

export default Counter
