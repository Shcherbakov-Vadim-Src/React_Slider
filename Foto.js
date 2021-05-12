import React, { Component } from 'react';

class Foto extends Component {
   state = {
      value: 0,
      fotoArray: [
          'https://checkintime.ru/wp-content/uploads/2018/09/v7qsn9botyw-300.jpg',
          'https://watafak.ru/uploads/posts/2017-10/1508337658_kourto_gr.jpg',
          'https://ready2travel.ru/wp-content/uploads/2016/07/6821661665_d2b9a73b27_o.jpg',
          'https://avatars.mds.yandex.net/get-zen_doc/1362956/pub_5aec293a00b3dd64a60f09cc_5aec2e93bce67e5cd9f51679/scale_1200',
          'https://avatars.mds.yandex.net/get-zen_doc/1708669/pub_5e3f14b0ed9e3c373ebf0e4a_5e45b430199f2d3291f0d153/scale_1200',
          'https://st03.kakprosto.ru/images/article/2019/3/3/348734_5c7bfb8c69b055c7bfb8c69b3f.jpeg',
          'https://avatars.mds.yandex.net/get-pdb/251121/fb546979-07cd-4baf-a9eb-fd3b899ec917/s1200',
          'https://lifehike.ru/wp-content/uploads/2015/10/%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D1%8B-%D0%90%D0%BC%D1%81%D1%82%D0%B5%D1%80%D0%B4%D0%B0%D0%BC%D0%B0.jpg'
      ]
   }

clickOnOff = () => {

   if(this.state.fotoArray) {
      this.setState({ value: this.state.value - 1 });
   }  
   if(this.state.value === 0) {
      this.setState({ value: 7 });
   }
}

clickOnAdd = () => {

   if(this.state.fotoArray) {
      this.setState({value: this.state.value + 1});
   } 
   if(this.state.value === 7) {
      this.setState({ value: 0 });
   }
}

clickHandler = (event, num) => {
   // console.log(event.currentTarget);
   this.setState({
      value: num
   })
}

render() {

    return (
      <>
         <div className='conteinerTwo'>   
            <img className="photo" key={1} src={this.state.fotoArray[this.state.value]} alt="photo" />
         </div>
         <div className='conteiner'>
            <button className="button buttonMinus" onClick={this.clickOnOff}>❮</button>
            <div>
               <img onClick={ (e) => this.clickHandler(e, 1)} className="subPhoto" src={this.state.fotoArray[1]} alt="photo" />
               <img onClick={ (e) => this.clickHandler(e, 2)} className="subPhoto" src={this.state.fotoArray[2]} alt="photo" />
               <img onClick={ (e) => this.clickHandler(e, 3)} className="subPhoto" src={this.state.fotoArray[3]} alt="photo" />
               <img onClick={ (e) => this.clickHandler(e, 4)} className="subPhoto" src={this.state.fotoArray[4]} alt="photo" />
               <img onClick={ (e) => this.clickHandler(e, 5)} className="subPhoto" src={this.state.fotoArray[5]} alt="photo" />
               <img onClick={ (e) => this.clickHandler(e, 6)} className="subPhoto" src={this.state.fotoArray[6]} alt="photo" />
               <img onClick={ (e) => this.clickHandler(e, 7)} className="subPhoto" src={this.state.fotoArray[7]} alt="photo" />
            </div>
            <button className="button buttonPlus" onClick={this.clickOnAdd}>❯</button>
         </div>
      </>
    );
  }
}

export default Foto;