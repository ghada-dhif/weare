import React from "react";
import Axios from "axios";

class Btq extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produit: [],
    };
  }

  getProduit = async () => {
    await Axios.get("https://api.mocki.io/v1/af37df01")
      .then((response) => {
        console.log(response.data);
        this.setState({
          produit: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  renderProduit = () => {
    return this.state.produit.map((p) => {
      console.log(p);
      
      return (
        <div>
           
          <div key={p.id}>
            <img
              style={{
                top: 372,
                left: 139,
                width: 400,
                height: 260,
                alignItems: "center",
                marginLeft: 500,
              }}
              src={p.picture}
            />
            <br />
            <div style={{ alignItems: "center", marginLeft: 600 }}>
              {p.product_name}
              <br />
              {p.price}
            </div>
          </div>
        </div>
      );
    });
  };
  componentDidMount = () => {
    this.getProduit();
  };
  render = () => {
    return (
      <div>
        {this.renderProduit()}
         {/* <div style={{position: 'relative',}}>
        <img
                        style={{ top: 372, left: 139, width: '100%', height: 100 }}
                        src={process.env.PUBLIC_URL + "/b1.png"}
                      />
          <div>
              <div style={{position:'absolute', bottom: 20, right: 900, color:'#7DAF3F', paddingRight: 20, paddingLeft: 20,}}>
                  <h4>Nos Produits</h4>
              </div>
          </div>
        </div>  */}
      </div>
    );
  };
}

export default Btq;
