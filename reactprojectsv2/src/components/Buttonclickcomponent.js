import React,{Component} from "react";

class Buttonclickcomponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state ={message:"Hi"}
        this.ButtonClicked = this.ButtonClicked.bind(this)
    }
    
    

    ButtonClicked()
    {
        this.setState({message:"Goodbye"})
    }
    
    render()
    {
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.ButtonClicked}>Click button</button>
            </div>
        )

    }
}

export default Buttonclickcomponent
