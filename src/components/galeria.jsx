import React, { Component } from 'react';
import axios from 'axios';
import style from './galeria.scss';

export default class Galeria extends Component {
  constructor () {
    super();

    this.state = {
      title: 'Galeria',
      url: 'https://jsonplaceholder.typicode.com/photos',
      list: []
    };
  }

  componentWillMount () {

  }

  async componentDidMount () {
    const list = await axios.get(this.state.url);

    this.setState({
      ...this.state,
      list: list.data.slice(0, 20)
    });
  }

  render () {
    const {
      title,
      list
    } = this.state;

    return (
      <div id="galeria">
        <h2>{title}</h2>
        <ul>
          {
            list.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.url} alt={item.title} />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
