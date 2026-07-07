import "./Contact.css";
function Contact(){
    return(
        <section className="contact">
            <h2>Contact Me</h2>
            
            <form>
                <table className="contact-table">

                <tr>
       <td> <input type="text" placeholder="Your Name"></input></td>
       </tr>
       <tr>
        <td><input type="email" placeholder="Your Email"></input></td>
        </tr>
        <tr>
       <td> <textarea placeholder="Your Message" rows="6"></textarea></td>
       </tr>
       <td>
        <button type="submit">Send Message</button>
        </td>
        </table>
        </form>
        
        </section>
    )
}
export default Contact