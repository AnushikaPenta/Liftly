import React from "react";




const styles = {
  container: {
    fontFamily: "Nunito, sans-serif",
    backgroundColor: "#ffa07a",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 50px",
    maxWidth:"100%",
    margin:"0 10%",
  
  },
  content: {
    maxWidth: "1100px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    
  },
  heading: {
    fontSize: "60px",
    lineHeight: "65px",
    marginBottom: "24px",
  },
  subheading: {
    fontSize: "14px",
    lineHeight: "18px",
    color: "#7e7e7e",
  },
  form: {
    borderBottom: "4px solid #f3f2cf",
    marginBottom: "60px",
  },
  input: {
    width: "100%",
    height: "54px",
    borderRadius: "5px",
    border: "2px solid #767676",
    padding: "0 16px",
    fontSize: "16px",
    marginBottom: "15px",
    backgroundColor: "#f3f2cf",
  },
  textarea: {
    width: "100%",
    height: "125px",
    border: "1px solid #767676",
    padding: "16px",
    fontSize: "16px",
    marginBottom: "27px",
    backgroundColor: "#f3f2cf",
  },
  button: {
    height: "50px",
    minWidth: "240px",
    fontSize: "16px",
    color: "white",
    border: "2px solid tomato",
    backgroundColor: "tomato",
    marginBottom: "60px",
  },
  
};

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div>
          <h1 style={styles.heading}>Get in touch</h1>
          <p style={styles.subheading}>
            Feel free to reach out to us with your queries and feedback. We're here to help!
          </p>
        </div>
        <div>
          <form style={styles.form}>
            <input style={styles.input} type="text" placeholder="Your Name" required />
            <input style={styles.input} type="email" placeholder="Email" required />
            <textarea style={styles.textarea} placeholder="Message" rows="4" required></textarea>
            <button style={styles.button} type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



