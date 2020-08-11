import React, { Component } from 'react';
import Item from './Item';

class Content extends Component {
  state = {
    aboutMe:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quis error! Fuga, fugiat esse dolore ab quis hic et obcaecati id facilis! Aliquam illum at architecto minima quo nisi sunt ipsa a laborum soluta, dolores magnam repudiandae, tempore aperiam laudantium reiciendis!',
    education: [
      {
        year: 1990,
        title: 'I was born in Katowice',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        year: 2005,
        title: 'Secondary school specializing in artistic',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        year: 2009,
        title: 'First level graduation in Graphic Design',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
        year: 2012,
        title: 'Second level graduation in Graphic Desin',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
    ],
  }
  render() {
    return (
      <div className="pageContent">
        <section>
          <h3>ABOUT ME</h3>
          <p>{this.state.aboutMe}</p>
        </section>

        <section>
          <h3>EDUCATION</h3>
          {this.state.education.map((eduItem)=>
          (<Item item={eduItem}/>)
            )}
        </section>
      </div>
    )
  }
}

export default Content;
