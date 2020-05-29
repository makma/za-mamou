import React from 'react'

class Question extends React.Component {
  render() {
    const question = this.props.question.elements

    return <div>
        <h3>{question.text.value}</h3>
        <div dangerouslySetInnerHTML={{__html: question.description.value}}/>
        <button className={'btn btn-secondary'} onClick={() => this.props.goToStep(this.props.target.no)}>{question.answers.value[1].name}</button>
        <button className={'btn btn-secondary'} onClick={() => this.props.goToStep(this.props.target.yes)}>{question.answers.value[0].name}</button>
        {
            this.props.question.system.codename !== 'duration' ? 
            <button className={'btn btn-secondary'} onClick={() => this.props.goToStep(1)}>Späť na prvú otázku</button> :
            null
        }
    </div>
  }
}

export default Question
