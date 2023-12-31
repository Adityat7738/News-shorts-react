import React, { Component } from 'react'
import '../App.css'

export default class Newsitem extends Component {
  
  render() {
 


  
    let{title,description ,imgurl,newsurl}=this.props;
    return (
      <div >
        <div className='my-3'>
        <div className="card " id="cards" style={{width:"18 rem"}}>
       <img className="card-img-top" src={imgurl} alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsurl}   rel="noreferrer" target="_blank"className="btn  btn-sm  btn-dark"  >Click for more</a>
  </div>
</div>
        
      </div>


        </div>

  
    )
  }
}