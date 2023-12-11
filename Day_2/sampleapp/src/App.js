import'./Assets/css/demo.css'
function App()
{
    return(
        <div>
           <form class="container">
        <input type="text"  placeholder="First Name" className="inp-class"/>
        <input type="text" placeholder="Last Name" className="inp-class"/>
        <input type="number" placeholder="Roll no" className="inp-class"/>
        <input type="email" placeholder="Email" className="inp-class" />
        <input type="password" placeholder="password" id="demo" className="inp-class"/>
        <input type="password" placeholder="re enter password"id="dem" className="inp-class"/>
        <input type="submit" onClick="register()"  placeholder="REGISTRATION" className="inpsub-class"/>
    </form>
        </div>
    )
}
export default App