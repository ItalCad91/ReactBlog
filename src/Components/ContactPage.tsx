
function ContactPage() {
  return (
    <>
    <div style={{padding: "20px"}}>
    <div className="form-floating mb-3">
      <input type="FullName" className="form-control" id="floatingInputDisabled" placeholder="first_name - last_name" />
      <label htmlFor="floatingInputDisabled">Full Name</label>
    </div>
    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" />
      <label htmlFor="floatingInputDisabled">Email address</label>
    </div>
    <div className="form-floating mb-3">
      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{ height: '100px' }} ></textarea>
      <label htmlFor="floatingTextarea2Disabled">Comments</label>
    </div>
    <div>
      <button>Send</button>
    </div>    
    </div>
    </>
  );
}

export default ContactPage;
