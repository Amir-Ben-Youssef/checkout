
class Cartcheck extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          userName: "",
          userEmail: "",
          userPassword: "",
          addressOne: "",
          addressTwo: "",
          addressCity: "",
          addressState: "",
          addressZip: "",
          Phone: "",
          CCNumber: "",
          expiryDate: "",
          CVV: "",
          CCZip: "",
          route: "home",
        }
        this.handleChange= this.handleChange.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.confirmOrder= this.confirmOrder.bind(this)
        this.formsRouter= this.formsRouter.bind(this)


    }
    // to handle the change in every input field
    handleChange(event){
        this.setState({[event.target.name]: event.target.value}) // save the value in the state for each name of each input
    }

    // set the route for the next form
    nextPage(nextRoute){
        this.setState({route: nextRoute})
    }

    formsRouter() {
        const route = this.state.route;
        if (route === "home") {
            return <Home  nextPage = {this.nextPage} handleChange = {this.handleChange} c/>
        }
        else if (route === "f1") {
            return <Form1  nextPage = {this.nextPage} handleChange = {this.handleChange} />
        } 
        else if (route === "f2") {
            return <Form2  nextPage = {this.nextPage} handleChange = {this.handleChange} />
        } 
        else if (route === "f3") {
            return <Form3  nextPage = {this.nextPage} handleChange = {this.handleChange} />
        } 
        else if (route === "confirmation") {
             return <Confirmation  nextPage = {this.nextPage} confirmOrder = {this.confirmOrder} handleChange = {this.handleChange} state = {this.state}/>
        } 
    
    }

    confirmOrder(data) {
     axios
        .post("checks/account", data)
        .then(this.nextPage("home"))
        .catch(err => console.log(err))
    }

    render() {
        return (
          <div id="webpage">
            { this.formsRouter() }
          </div>
        )
    }
}
    const Home = (props) => {
        return (
          <div id="cart">
            <button onClick={() => props.nextPage("f1")}>Check-out</button>
          </div>
        )
      }

    const Form1 = (props) => {
        return (
          <div id="accountForm">
            <h1>Personal Information:</h1>
            <form>
              Name: <input type="text" name="userName" onChange={props.handleChange}></input><br></br>
              Email: <input type="email" name="userEmail" onChange={props.handleChange}></input><br></br>
              Password: <input type="password" name="userPassword" onChange={props.handleChange}></input><br></br>
              <input type="submit" value="next" onClick={() => props.nextPage("f2")}></input>
            </form>
          </div>
        )
    }

    const Form2 = (props) => {
        return (
          <div id="addressForm">
          <h1>Address Informations:</h1>
            <form>
              Address line 1: <input type="text" name="addressOne" onChange={props.handleChange}></input><br></br>
              Address line 2: <input type="text" name="addressTwo" onChange={props.handleChange}></input><br></br>
              City: <input type="text" name="addressCity" onChange={props.handleChange}></input><br></br>
              State: <input type="text" name="addressState" onChange={props.handleChange}></input><br></br>
              Zip Code: <input type="text" name="addressZip" onChange={props.handleChange}></input><br></br>
              Phone number: <input type="text" name="Phone" onChange={props.handleChange}></input><br></br>
              <input type="submit" value="next" onClick={() => props.nextPage("f3")}></input>
            </form>
          </div>
        )
    }

    const Form3 = (props) => {
        return (
          <div id="cardForm">
          <h1>Credit Card Informations: </h1>
            <form>
              Credit card #: <input type="text" name="CCNumber" onChange={props.handleChange}></input><br></br>
              Expiration Date: <input type="date" name="expiryDate" onChange={props.handleChange}></input><br></br>
              CVV: <input type="text" name="CVV" onChange={props.handleChange}></input><br></br>
              Billing zip: <input type="text" name="CCZip" onChange={props.handleChange}></input><br></br>
              <input type="submit" value="next" onClick={() => props.nextPage("confirmation")}></input>
            </form>
          </div>
        )
      }

    const Confirmation = (props)=> {
        var {
                userName,
                userEmail,
                userPassword,
                addressOne,
                addressTwo,
                addressCity,
                addressState,
                addressZip,
                Phone,
                CCNumber,
                expiryDate,
                CVV,
                CCZip,           
            } = props.state
        
        return (
            <div>
                <h3> Please confirm your Informations :</h3>
                <br></br>
                <table>
                    <tr><td>Your Personal Informations : </td></tr>
                    <tr><td>Name: {props.state.userName}</td></tr>
                    <tr><td>Email: {props.state.userEmail}</td></tr>
                    <tr><td>Password: {props.state.userPassword}</td></tr>
                </table>
                <br></br>
                <table>
                    <tr><td>Your Address Informations : </td></tr>
                    <tr><td>Address line 1: {props.state.addressOne}</td></tr>
                    <tr><td>Address line 2: {props.state.addressTwo}</td></tr>
                    <tr><td>Address line 3: {props.state.addressCity}, {props.state.addressState}, {props.state.addressZip}</td></tr>
                    <tr><td>Phone Number: {props.state.Phone}</td></tr>
                </table>
                <br></br>
                <table>
                    <tr><td>Your Credit Card Informations : </td></tr>
                    <tr><td>Credit Card Number: {props.state.CCNumber}</td></tr>
                    <tr><td>expiryDate : {props.state.expiryDate}</td></tr>
                    <tr><td>cvv : {props.state.CVV}</td></tr>
                    <tr><td>Billing Zip Code: {props.state.CCZip}</td></tr>
                </table>
                <br></br>
                <button onClick={() =>{
                    console.log(props)
                    props.confirmOrder({
                        userName,
                        userEmail,
                        userPassword,
                        addressOne,
                        addressTwo,
                        addressCity,
                        addressState,
                        addressZip,
                        Phone,
                        CCNumber,
                        expiryDate,
                        CVV,
                        CCZip,           
                    });
                }}>Confirm</button>

            </div>
            
        )
    }


ReactDOM.render(<Cartcheck />, document.getElementById('app'));