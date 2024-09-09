import Footer from "./Footer"
import Header from "./Header"
import Body from "./Body"

export default function App(){
    return(
        <>
        <Header />
        {/* <Body name="Jeremy" food="pizza" isHealthy={false} age={23} />
        <Body />
        <Body name="Chris" food="Hotdog" isHealthy={false} age={18} />
        <Body name="Joshua" food="Sayote" isHealthy={true} age={34} />
        <Body name="Daniel" food="Kamote" isHealthy={true} age={28} />
        <Body name="Tangol" food="Patatas" isHealthy={true} age={44} /> */}
        <Body name="Apollo Quiboloy" case="HUMAN TRAFFICKING" isHealthy={true} age={44} />
        <Body name="Apollo Quiboloy" case="HUMAN TRAFFICKING" isHealthy={true} age={44} />
        <Body name="Apollo Quiboloy" case="HUMAN TRAFFICKING" isHealthy={true} age={44} />
        <Footer />
        </>
        
    )
}