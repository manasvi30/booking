import Featured from "../../components/featured/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import Fea from "../../components/fea/Fea";
import "./home.css";




const Home = () => {
  return (
    <div>
      <body >
      <Navbar />
      <Header/>
      <div className="homeContainer">
    
        <Featured/>

       
       
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        
        <Fea/>
        <MailList/>
        <Footer/>
      </div>
      </body>
    </div>
  );
};

export default Home;