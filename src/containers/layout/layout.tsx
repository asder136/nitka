import React from 'react';
import './layout.scss';
import Button from '../../components/button/button';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { changeText } from '../../actions';

const mapStateToProps = (state: any) => ({
  text: state.text
});

export const Layout = connect(mapStateToProps)(class extends React.Component {

  state = {
    columns: 1,
    // @ts-ignore
    textColumns: this.splitTextToColumns(1)
  };

  render() {
    const {textColumns, columns} = this.state;

    return (
        <div className="layout">
          <div className="layout__button-wrapper">
            {Array.from(Array(3)).map((value: any, index: number) => {
              const changeColumns = () => {
                const columns = index + 1;
                this.setState({textColumns: this.splitTextToColumns(columns), columns});
              };
              return (
                  <Button type="blue"
                          key={index}
                          className={classNames('layout__button', {'button_white': columns === index + 1})}
                          onClick={changeColumns}
                          text={`Columns: ${index + 1}`}/>
              );
            })}
          </div>
          <div className="layout__text-wrapper">
            {Array.from(Array(columns)).map((value: any, index: any) => (
                <div className="layout__text"
                     key={index}
                     title={index}
                     onInput={this.handleTextChange}
                     contentEditable={true}>{textColumns[index]}</div>
            ))}
          </div>
        </div>
    );
  }

  private splitTextToColumns(columns: number) {
    const textColumns = [];
    // @ts-ignore
    const splittedText = this.props.text.split(/\s+/);
    const averageColumn = splittedText.length / columns;
    for(let i =0; i<columns; i++) {
      const from = Math.ceil(i * averageColumn);
      const to = Math.ceil((i + 1 ) * averageColumn);
      textColumns.push(splittedText.slice(from, to).join(' '));
    }
    return textColumns;
  }

  private handleTextChange = (e: any) => {
    const textColumns = this.splitTextToColumns(this.state.columns);
    textColumns[e.target.title] = e.target.textContent;
    // @ts-ignore
    this.props.dispatch(changeText(textColumns.join(' ')));
  };
});
