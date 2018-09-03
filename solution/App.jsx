import React from 'react';

export class Header extends React.Component {
  render() {
    return (
        <h1>Heading from Header Class</h1>
    );
  }
}

export class Content extends React.Component {
  render() {
    return (
      <div>
        <p>The first paragraph in Content</p>
        <p>The second paragraph in Content</p>
      </div>
    );
  }
}
