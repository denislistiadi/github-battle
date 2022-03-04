import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

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

LanguageNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedLanguage: 'All',
            repos: null,
            error: null
        }

        this.updateLanguage = this.updateLanguage.bind(this)
        this.isLoading = this.isLoading.bind(this)
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage)
        
    }

    updateLanguage (selectedLanguage) {
        this.setState({
            selectedLanguage,
            error: null,
            repos: null
        })

        fetchPopularRepos(selectedLanguage)
            .then((repos) => this.setState({
                repos,
                error: null
            }))
            .catch(() => {
                console.log('Error fetching repos: ', error)

                this.setState({
                    error: `There was an error fetching the repositories.`
                })
            })
    }

    isLoading() {
        return this.state.repos === null && this.state.error === null
    }
    
    render() {
        const {selectedLanguage, repos, error} = this.state

        return (
            <React.Fragment>
                <LanguageNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />

                {this.isLoading() && <p>Loading...</p>}

                {error && <p>{error}</p>}

                {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
            </React.Fragment>
        )
    }
}