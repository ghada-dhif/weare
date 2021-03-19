import React from "react";
import styled from "styled-components";


function Home() {
  return (
    <div>
      <div className="home-header">
        <img
          style={{ top: 70, left: 0, width: 1366, height: 280 }}
          src={process.env.PUBLIC_URL + "/home.png"}
        />
      </div>
      <br />
      <table
        style={{
          borderCollapse: "separate",
          borderSpacing: "100",
          marginLeft: 100,
          marginRight: 100,
        }}
      >
        <tr>
          <div
            style={{ alignItems: "center", justifyContent: "center" }}
            className="home-buttom"
          >
            <td>
              <div>
              <img
                style={{ top: 372, left: 139, width: 200, height: 160 }}
                src={process.env.PUBLIC_URL + "/btm1.png"}
              />
              <div><p>Nature</p></div>
              </div>
            </td>
            <td>
              <img
                style={{ top: 372, left: 361, width: 200, height: 160 }}
                src={process.env.PUBLIC_URL + "/btm2.png"}
              />
            </td>
            <th>
              <img
                style={{ top: 372, left: 583, width: 200, height: 160 }}
                src={process.env.PUBLIC_URL + "/btm3.png"}
              />
            </th>
            <th>
              <img
                style={{ top: 372, left: 805, width: 200, height: 160 }}
                src={process.env.PUBLIC_URL + "/btm4.png"}
              />
            </th>
            <th>
              <img
                style={{ top: 372, left: 1027, width: 200, height: 160 }}
                src={process.env.PUBLIC_URL + "/btm5.png"}
              />
            </th>
          </div>
        </tr>
      </table>
      <br />
      <div>
        <table style={{ marginLeft: 100, marginRight: 100 }}>
          <tr>
            <img
              style={{
                top: 564,
                left: 139,
                width: 1030,
                height: 100,
                opacity: 1,
              }}
              src={process.env.PUBLIC_URL + "/btm6.png"}
            />
          </tr>
        </table>
      </div>
      <br />
      <div className="realisation" style={{ marginTop: 50}}>
        <h5 style={{ marginLeft: 100 }}>Nos Realisations</h5>
        <table style={{ marginLeft: 100, marginRight: 0 }}>
          <tr>
            <img
              style={{
                top: 874,
                left: 458,
                width: 900,
                height: 350,
                opacity: 1,
                marginLeft: 220,
              }}
              src={process.env.PUBLIC_URL + "/btm7.png"}
            />
          </tr>
          <form>
            <p>eyfehuigzrif</p>
          </form>
        </table>

        <br />
        <div style={{ width: "100%" }}>
          <table
            style={{
              borderCollapse: "separate",
              borderSpacing: "100",
              marginLeft: 100,
              marginRight: 100,
              marginTop: 50,
            }}
          >
            <tr>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 100,
                  marginLeft: 100,
                }}
                className="home-buttom"
              >
                <td>
                  <div style={{ position: "relative" }} class="container">
                    <img
                      style={{ top: 372, left: 139, width: 200, height: 160 }}
                      src={process.env.PUBLIC_URL + "/tf0.png"}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                        color: "#7DAF3F",
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                      class="text-block"
                    >
                      <h6>Notice et Installation</h6>
                      <p style={{ color: "white" }}>
                        Avant de commencer, calculer la quantité de bois, de
                        béton et de quincaillerie dont vous aurez besoin
                      </p>
                    </div>
                  </div>
                </td>
                <td>
                  <img
                    style={{ top: 372, left: 139, width: 200, height: 160 }}
                    src={process.env.PUBLIC_URL + "/tf1.png"}
                  />
                </td>
                <td>
                  <img
                    style={{ top: 372, left: 361, width: 200, height: 160 }}
                    src={process.env.PUBLIC_URL + "/tf2.png"}
                  />
                </td>
                <br />
                <th>
                  <img
                    style={{ top: 372, left: 583, width: 200, height: 160 }}
                    src={process.env.PUBLIC_URL + "/tf3.png"}
                  />
                </th>
                <th>
                  <img
                    style={{ top: 372, left: 805, width: 200, height: 160 }}
                    src={process.env.PUBLIC_URL + "/tf4.png"}
                  />
                </th>
                <th>
                  <img
                    style={{ top: 372, left: 1027, width: 200, height: 160 }}
                    src={process.env.PUBLIC_URL + "/tf5.png"}
                  />h2
                </th>
              </div>
            </tr>
          </table>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Home;
