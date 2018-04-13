import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';

import styles from './page.css';

class Home extends Component {
  componentDidMount() {
    window.getDataFlickr = (data) => {
      this.handleData(data);
    };
  }

  handleData = (data) => {
    this.props.setFeed(data.items);
  };

  handlerSearchDebounce = debounce((val) => {
    if (val) {
      const oldBlock = document.getElementById('callback');
      if (oldBlock) {
        oldBlock.remove();
      }
      const s = document.createElement('script');
      s.id = 'callback';
      s.type = 'text/javascript';
      s.src = `https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=getDataFlickr&format=json&tags=${val.split(' ').join(',')}&tagmode=any`;
      document.getElementsByTagName('head')[0].appendChild(s);
    } else {
      this.props.setFeed(null);
    }
  }, 200);

  handlerSearch = (e) => {
    e.persist();
    this.handlerSearchDebounce(e.target.value);
  };

  render() {
    const { feed } = this.props;
    return (
      <div className={styles.wrap}>
        <h1>Search public photos on Flickr</h1>
        <input
          name="search"
          className={styles.searchBox}
          placeholder="Type here to search"
          onChange={this.handlerSearch}
        />
        <div className={styles.results}>
          {
            feed && feed.length === 0 && (
              <div>No result</div>
            )
          }
          {
            feed && feed.map(item => (
              <div key={item.link} className={styles.result}>
                <div className={styles.resultImage}>
                  <a target="_blank" href={item.link}>
                    <img src={item.media.m} alt={item.title} />
                  </a>
                </div>
                <div className={styles.resultInfo}>
                  <div className={styles.resultRowInfo}>
                    <b>Title</b> {item.title}
                  </div>
                  <div className={styles.resultRowInfo}>
                    <b>Author</b> {item.author}
                  </div>
                  <div className={styles.resultRowInfo}>
                    <b>Tags</b> {item.tags}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  feed: PropTypes.array,
  setFeed: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setFeed: (data) => {
    dispatch({
      type: 'FEED_SET',
      payload: data,
    });
  },
});

const mapStateToProps = ({ feed }) => ({
  feed,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
