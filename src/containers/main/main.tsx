import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import './main.scss';
import { changeText } from '../../actions';

const mapStateToProps = (state: any) => ({
    text: state.text
});

export const Main = connect(mapStateToProps)(({dispatch, text}: {dispatch: any, text: string}) => {
  const textChange = (e: any) => {
      dispatch(changeText(e.target.value));
  };
  return (
    <div className="main">
      <textarea className="main__text" onChange={textChange}>{text}</textarea>
      <Link className="main__layout" to="/layout">Layout</Link>
    </div>
  );
});
