import React,{ Component } from 'react';
import Card from './card.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

class HorizontalCarouse extends Component{
    constructor(props){
        super(props)

        this.state = {
            current_card : 1
        }
    }

    componentDidMount(){
        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let lase_card_clone = this.card_container.children[this.card_container.children.length -1].cloneNode(true);
    
        this.card_container.insertBefore(lase_card_clone,this.card_container.children[0]);
        this.card_container.append(first_card_clone);
        this.card_container.style.transitionDuration = "0.0s"
        this.card_container.style.transform = `translate(-${920}px)`
    }

    handel_next = ()=>{
        if(this.state.current_card < this.card_container.children.length -1){
            let new_card = this.state.current_card+1;
            this.setState({current_card : new_card},()=>{
                this.card_container.style.transitionDuration = "0.5s"
                this.card_container.style.transform = `translate(-${920 * this.state.current_card}px)`

                if(this.state.current_card === this.card_container.children.length -1){
                    this.card_container.style.transitionDuration = "0.5s"
                    this.card_container.style.transform = `translate(-${920}px)`
                
                    this.setState({current_card : 1})
                }
            })
        }else return ;
    }
    handel_previous = ()=>{
        if(this.state.current_card > 0 ){
            let new_card = this.state.current_card-1;
            this.setState({current_card : new_card},()=>{
                this.card_container.style.transitionDuration = "0.5s"
                this.card_container.style.transform = `translate(-${920 * this.state.current_card}px)`

                if(this.state.current_card === 0){
                    this.card_container.style.transitionDuration = "0.5s"
                    this.card_container.style.transform = `translate(-${920 * (this.card_container.children.length -2 )}px)`
                
                    this.setState({current_card : this.card_container.children.length - 2})
                }
            })
        }else return ;
    }

    render(){
        return (
            <div>
                
                <div className="view-port" style={styles.view_port}>
                    <div ref={ref_id => this.card_container = ref_id} className="card-content" style={styles.card_container}>
                        <Card card_number = "0"/>
                        <Card card_number = "1"/>
                        <Card card_number = "2"/>
                        <Card card_number = "3"/>
                    </div>
                </div>
                <div style={styles.arrowDiv}>
                    <button style={styles.arrowLeft} onClick={this.handel_previous}><FontAwesomeIcon icon={faArrowRight} rotation={180} size={'3x'}/></button>
                    <button style={styles.arrowRight} onClick={this.handel_next}><FontAwesomeIcon icon={faArrowRight} size={'3x'}/></button>
                </div>
            

            </div>
        )
    }
}

const styles = {
    view_port : {
        position:'absolute',
        top : '20%',
        left : '50%',
        transform: 'translate(-50%,-50%)',
        width: '920px',
        height: '360px',
        overflow:'hidden',
        boxShadow: '0px 13px 16px rgba(0, 0, 0, 0.25)',
        borderRadius: '31px'
    },
    card_container : {
        display : 'flex',
        flexDirection: 'row',
        width : 'fit-content'
    },
    arrowDiv:{
        width:'100%',
        position:'absolute',
    },
    arrowLeft : {
        outline: '0',
        marginTop:'22%',
        width:'30%',
        background: '#ffffff00',
        border: 'none',
        color:'#FFF',
        marginRight:'20%'
    },
    arrowRight : {
        outline: '0',
        background: '#ffffff00',
        border: 'none',
        color:'#FFF',
        marginLeft:'33%'
    }

}

export default HorizontalCarouse
