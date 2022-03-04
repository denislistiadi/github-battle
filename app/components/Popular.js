import React from 'react'

function LanguageNav ({selected, onUpdateLanguage}) {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

        return (
            <div className='flex-center'>
                {languages.map((language) => (
                    <li key={language}>
                        <button 
                            onClick={() => onUpdateLanguage(language)} 
                            className='btn-clear nav-link'
                            style={language === selected ? {color: 'rgb(187, 46, 31'} : null}
                        >
                            {language}
                        </button>
                    </li>
                ))}
            </div>
        )
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
        }

        this.updateLanguage = this.updateLanguage.bind(this)
    }
    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage
        })
    }
    
    render() {
        const {selectedLanguage} = this.state

        return (
            <React.Fragment>
                <LanguageNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
            </React.Fragment>
        )
    }
}