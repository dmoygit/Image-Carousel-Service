import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentImageIndex: 0
      imagesContainer: []
    }
  }

  componentDidMount() {
    axios
      .get('/carousel')
      .then(res => {
        let newRes = res.data;
        let urlArr = newRes.map((item) => {
            return item.url;
        })
        let imagesContainer = urlArr;
        this.setState({imagesContainer}, () => {
          // console.log(this.state.imagesContainer);
          console.log('successful get mount!')
        });
      })
      .catch((err) => {
        console.log('error getting images', err);
      })
  }

    // setImages(query, index) {
    //   getImages(query, ({data}) => {
    //     let copiedState = [...this.state.images];
    //     copiedState[index] = data;
    //     this.setState({
    //       images: copiedState
    //     })
    //   })
    // }

    // getImages(query, callback) {
    //   axios
    //     .get(`carousel/${query}`)
    //     .then(data => callback(data))
    //     .catch(err => console.log('error getting images', err))
    // }


  render() {
    return (
      <div> react is working! </div>
    )
  }
}

export default App;