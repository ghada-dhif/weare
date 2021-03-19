import React from 'react';
import styled from 'styled-components';
function Footer() {
    return (
        
        <div className="main-footer">
        <div className="separator" style={{backgroundColor: '#7DAF3F',top: 3061,opacity: 1,left: 139,width: '80%',height: 10,marginLeft: 100,marginRight: 100,}} /> 

            <div style={{marginTop: 30}} className="footer-middle">
            <div className="container">
                
                <div style={{width: '80%', marginLeft: 100}} className="row">
                    {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Mon Exterieur.fr</h4>
                        
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h6>Lien Utiles</h6>
                        <ul  style={{fontSize: 10}} className="list-unstyled" >
                            <li>Configurateur</li>
                            <li>Notre magasin</li>
                            <li>Notice et Installation</li>
                            <li>Livraison Transport</li>
                        </ul>
                        
                    </div>
                   
                    {/* column 2  */}
                    
                    <div className="col-md-3 col-sm-6">
                        <h6>Nous contacter</h6>
                        <ul style={{fontSize: 10}}className="list-unstyled" >
                            <li>adress:</li>
                            <li>3 rue de champ de verger allonnes,payes de la Loire, France</li>
                            <li>Telephone</li>
                            <li>+33243570087</li>
                        </ul>
                    </div>
                    {/* column 3  */}
                    <div style={{fontSize: 10}} className="col-md-3 col-sm-6">
                        <h6> Horaires</h6>
                        <ul className="list-unstyled" >
                            <li>Lundi à Vendredi</li>
                            <li>7:30-12:00</li>
                            <li>13:30-18:00</li>
                            <li>Samedi</li>
                            <h6>[fermer les samedis de janvier et fevrier]</h6>
                            <li>9:00-12:00</li>
                        </ul>
                    </div>

                </div>
                </div>

            </div>
            
        </div>
    )
}

export default Footer;

