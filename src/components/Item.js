import React, { Component } from 'react';

function Item(props) {
  const year = props.item.year;
  const title = props.item.title;
  const content = props.item.content;
  return (
    <li>
      <p className="year">
        <strong>{year}</strong>
      </p>
      <div className="resume">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{content}</p>
      </div>
    </li>
  );
}

export default Item;
