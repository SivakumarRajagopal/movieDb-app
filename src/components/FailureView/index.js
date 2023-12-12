import './index.css'

const FailureView = props => {
  const {errMsg} = props
  return <h1 className="error-center">{errMsg}</h1>
}

export default FailureView
