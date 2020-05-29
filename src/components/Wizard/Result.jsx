import React from 'react'

class Result extends React.Component {
  render() {
    const result = this.props.result.elements

    return <div>
        <h3>{result.title.value}</h3>
        <div dangerouslySetInnerHTML={{__html: result.description.value}}/>
        <button className={'btn btn-secondary'} onClick={() => this.props.goToStep(1)}>Späť na prvú otázku</button>
    </div>
  }
}

export default Result
