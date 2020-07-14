import './application.scss';
import './application.scoped.scss';
import React  from 'react';
import Swiper from 'swiper';

export default class App extends React.Component<any, any> {

  public swiperElement: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.swiperElement = React.createRef();
  }

  public componentDidMount(): void {
    const mySwiper = new Swiper(this.swiperElement.current as HTMLDivElement);
    console.log('mySwiper::', mySwiper);
  }

  public render() {
    return <>
      <div className='page'>
        <div className='banner'>
          <div className="swiper-container" ref={this.swiperElement}>
            <div className="swiper-wrapper">
              <div className="swiper-slide"><img src={require('./images/banner_1.jpg').default}/></div>
              <div className="swiper-slide"><img src={require('./images/banner_2.jpg').default}/></div>
              <div className="swiper-slide"><img src={require('./images/banner_3.jpg').default}/></div>
              <div className="swiper-slide"><img src={require('./images/banner_4.jpg').default}/></div>
              <div className="swiper-slide"><img src={require('./images/banner_5.jpg').default}/></div>
            </div>
          </div>
        </div>
      </div>
    </>;
  }
}
