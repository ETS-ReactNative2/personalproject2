import React, { Component } from "react"
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateUser } from '../ducks/reducer'


// import Comments from './../components/Comments'
// import Add from './Add'


class Home extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            updateInput: '',
            
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

    }

    componentDidMount() {
        axios.get('/api/user-data').then((res) => {
           
            this.props.updateUser(res.data)
        })

        axios.get('/api/comment-data')

            .then(res => {
                this.setState({ comments: res.data })
            })
    }


    handleInput(e) {
        if(e.target.value===null)
        alert("You can't add nothing")
        else{
        this.setState({ userInput: e.target.value })}
    }
    handleUpdate(id) {
        
        axios.put(`/api/comment/${id}`, { comment: this.state.updateInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })

    }
    handleClick(e) {
        axios.post('/api/comment', { comment: this.state.userInput }).then(res => {
            this.setState({ comments: res.data, userInput: '' })
        })
    }
    handleDelete(index){
        axios.delete(`/api/comment/${index}`).then(res=>{
            this.setState({comments: res.data})
        })
    }


    reset() {
        this.setState({ userInput: '' })
    }



    handleAddComment() { }

    render() {
        
        return (
            <div>
                
                <div className="body">
                <div className='sub-title-container'>
                <h1>UTAH VALLEYS WINDOW CLEANING EXPERT</h1>
                </div>
                    <div className='quote-btn'>
                    <Link to="/quotes"><button className="nav">Get A FREE Quote!</button></Link> 
                    </div>
                    <div className="homeInfo">
                      
                    <img id="cleaningHousePic" src= {require('../cleaninghouse.jpg')} alt=""></img>     

                           
                           <div className="text">
                           <p>
                           The appearance of your home is important to you and important to me too. That is why I work to make sure the inside and outside of your windows sparkle! At Cam's Window Cleaning I work to service my friends in neighbors in American Fork, Pleasant Grove, Orem, Lindon, and Lehi. I am personaly owned and operated which makes me cheaper and better then those others guys. I take pride in my work and hope to be able to service you and your family!  </p>   
                           <br/>
                           <ul>
                               
                               <li>✔ Weekly/monthly/quarterly/tri-annual/bi-annual/custom schedule</li>
                               <li>✔ Mineral stain/hard water removal</li>
                               <li>✔ Screen cleaning/sealing and repair</li>
                               <li>✔ Construction cleaning</li>
                               <li>✔ Mirror/chandelier/light fixture cleaning</li>
                               <li>✔ Interior partition/interior glass surfaces</li>
                               <li>✔ Pure water technology available</li>
                               <li>✔ Solar panel cleaning & maintenance</li>
                               <li>✔ Solar panel cleaning & maintenance</li>
                               <li>✔ Glass restoration/resurfacing/scratched glass repair</li>
                               <li>✔ Green seal certified glass cleaners used</li>
                           </ul>
                           </div>
                           <div>
                               
                           </div>
                    </div>
                    <div className='images-container'>
                        <img alt='house1' src={require('../images/house1.jpg')}/>
                        <img alt='house2' src={require('../images/house2.jpeg')}/>
                        <img alt='house3' src={require('../images/house3.jpeg')}/>
                        <br/>
                        <img alt='house4' src={require('../images/house4.jpeg')}/>
                        <img alt='house5' src={require('../images/house5.jpeg')}/>
                        <img alt='house6' src={require('../images/house6.jpeg')}/>
                        
                    </div>

                    <div className='second-paragraph'>
                        <p>
                        Regularly scheduled maintenance cleanings are a time saving, stress free option our customers love. Customer loyalty and favorable word of mouth advertising has facilitated my success. I am proud to provide professionalism and dependability. I also enjoy seeing a window come clean after being soiled for 20 plus years without prior professional cleaning. I schedule service for all sizes and styles of homes across Utah, from 1,200 sq ft to 21,000 sq ft and everywhere in between.
                        </p>
                    </div>

                    <div className='second-quote-btn'>
                        <Link to="/quotes"><button className="nav">Get A FREE Quote!</button></Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, { updateUser })(Home)

