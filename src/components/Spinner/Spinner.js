import { Component } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class Spinner extends Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={10}
        width={10}
        timeout={3000} //3 secs
      />
    );
  }
}