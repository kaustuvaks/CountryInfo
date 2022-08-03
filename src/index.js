import React from "react";
import ReactDOM  from "react-dom";
import "./index.css"


class Header extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <header className="navbar">
                <div className="nav-label" class="txt-cstm">
                    <label>
                        Country-WEB
                    </label>
                </div>
                <div className="nav-search">
                    <input type="text" placeholder="Search"></input>
                </div>
            </header>
        )
    }
}

class Country extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <table className="info">
                    <tbody>
                        <tr>
                            <th scope="row" className="">Name</th>
                            <td>India</td>
                            
                        </tr>
                        <tr className="bdr-btm">
                            <th scope="row" className="">Native name</th>
                            <td>भारत</td>     
                        </tr>
                        <tr className="bdr-top">
                            <th scope="row" className="">Capital</th>
                            <td></td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

class RestCountries extends React.Component{

    state = {
        data:null,
        countryName:null
    }

    componentDidMount(){
        this.setState({flagLink:this.state.data.flag})
        console.log(this.props.flagLink)
    }

    render(){
        return(
            <div className="Card-container">
                <span class="txt-cstm">{this.state.countryName}</span><br/>
                <div className="Card-top">
                    <img src={"hula"} alt={this.state.CountryName}/>
                </div>
                <div className="Card-bottom">
                    <h3 color="red">{this.props.Data}</h3>
                    <Country DataInfo={this.props.Data}/>
                </div>

            </div>
        );
    }
}


class App extends React.Component{

    state = {
        njs:null,
        isLoaded:false,
        errorNull:null
    }

    componentDidMount(){
        fetch("https://restcountries.com/v2/name/India?fullText=true")
        .then((response) => response.json())
        .then((data)=>{
            this.setState({
                njs:data[0],
                isLoaded:true
            },
            console.log(data[0]))
        .catch(err => {
            this.setState({
                isLoaded: false,
                error: err
            },
            console.log(this.state.error))
        })
        });
    }

    render(){
        return(
            <div className="body-container">
                <Header/>
                {this.state.isLoaded && (<RestCountries data={this.state.njs} />)}
            </div>
        );
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)