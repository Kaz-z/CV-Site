import React, { Component } from 'react';
import ReactContactForm from 'react-mail-form';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="ten columns offset-3">

                  <h1>{message}</h1>

            </div>

         </div>

         <div className="row">
            <div className="ten columns offset-3">

              <ReactContactForm to="kaazimzia.32@gmail.com" />

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>

      </div>
   </section>
    );
  }
}

export default Contact;
