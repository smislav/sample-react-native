import React from 'react';
import HomeUI from './HomeUI';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        };
    }

    static navigationOptions = {
        title: 'Select question category',
      };

      _fetchCategories = () => {
        fetch("https://opentdb.com/api_category.php", {
         method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                categories: responseJson.trivia_categories
            })
        })
        .catch((error) => {
            console.error(error);
        });
    };

    componentDidMount = () => {
        this._fetchCategories();
    }
    
    render() {
        return <HomeUI 
            categories={this.state.categories} />
    }
}

export default Home;