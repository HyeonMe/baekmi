import React,{ Component } from 'react';
import Card from './card.js';

class HorizontalCarouse extends Component{
    constructor(props){
        super(props)

        this.state = {
            current_card : 0
        }
    }

    componentDidMount(){
        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let lase_card_clone = this.card_container.children[this.card_container.children.length -1].cloneNode(true);
    
        this.card_container.insertBefore(lase_card_clone,this.card_container.children[0]);
        this.card_container.append(first_card_clone);
        this.card_container.style.transitionDuration = "0.0s"
        this.card_container.style.transform = `translate(-${870}px)`
    }

    handel_next = ()=>{
        if(this.state.current_card < this.card_container.children.length -1){
            let new_card = this.state.current_card+1;
            this.setState({current_card : new_card},()=>{
                this.card_container.style.transitionDuration = "0.5s"
                this.card_container.style.transform = `translate(-${870 * this.state.current_card}px)`

                if(this.state.current_card === this.card_container.children.length -1){
                    this.card_container.style.transitionDuration = "0.5s"
                    this.card_container.style.transform = `translate(-${870}px)`
                
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
                this.card_container.style.transform = `translate(-${870 * this.state.current_card}px)`

                if(this.state.current_card === 0){
                    this.card_container.style.transitionDuration = "0.5s"
                    this.card_container.style.transform = `translate(-${870 * (this.card_container.children.length -2 )}px)`
                
                    this.setState({current_card : this.card_container.children.length - 2})
                }
            })
        }else return ;
    }

    render(){
        return (
            <div>
                <button onClick={this.handel_previous}>이전</button>
                <button onClick={this.handel_next}>다음</button>

                <div className="view-port" style={styles.view_port}>
                    <div ref={ref_id => this.card_container = ref_id} className="card-content" style={styles.card_container}>
                        <Card card_number = "0"/>
                        <Card card_number = "1"/>
                        <Card card_number = "2"/>
                        <Card card_number = "3"/>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    view_port : {
        position:'absolute',
        top : '15%',
        left : '50%',
        transform: 'translate(-50%,-50%)',
        width: '870px',
        height: '260px',
        background: 'yellow',
        overflow:'hidden'
    },
    card_container : {
        display : 'flex',
        flexDirection: 'row',
        width : 'fit-content'
    }
}

export default HorizontalCarouse
