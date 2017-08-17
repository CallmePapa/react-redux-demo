/**
 * Created by weiqiujuan on 17-8-17.
 */
class Hello extends React.Component{
    constructor(props){
        super(props);
        this.handleClick =this.handleClick.bind(this);
    }

    handleClick(){
        this.props.actions.changeText();
    }

    render(){
        return(
            <h1 onClick={this.handleClick}>{this.props.text}</h1>
        )
    }
}

render(
        <Hello/>,
    document.getElementById('root')
)
export default  Hello;