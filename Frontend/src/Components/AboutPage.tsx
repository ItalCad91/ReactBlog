
function AboutPage() {
  return (
  <body>    

<div className="col-lg-8 mx-auto p-4 py-md-5">
  <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
      <span className="fs-4" style={{fontWeight:"bold", color:"darkblue"}}>About RRSystems Blog</span>
  </header>

  <main>
    <h1 className="text-body-emphasis">Welcome to the RRSystems Blog! We are a company that specializes in creating web development solutions, including applications and websites.</h1>
    <p className="fs-5 col-md-8">Our team is dedicated to delivering high-quality and innovative solutions to meet the needs of our clients. We strive to stay up-to-date with the latest technologies and industry trends to provide cutting-edge solutions.</p>
    <div className="mb-5">
      <a href="/Home" className="btn btn-primary btn-lg px-4">Go to the Blog</a>
    </div>

    <hr style={{fontWeight:"bolder"}}/>

    <div className="row g-5">
      <div className="col-md-6">
        <h2 className="text-body-emphasis">Why a Blog?</h2>
        <p>Through our blog, we aim to share our knowledge, insights, and experiences in the field of web development. We cover a wide range of topics, including front-end and back-end development, UI/UX design, best practices, and more.</p>
      </div>

      <div className="col-md-6">
        <h2 className="text-body-emphasis">What's in it for you?</h2>
        <p>Whether you are a developer, designer, entrepreneur, or simply interested in the world of web development, our blog offers valuable resources and articles to help you stay informed and inspired.</p>
      </div>
    </div>
  </main>
  <footer className="pt-5 my-5 text-body-secondary border-top">
  Thank you for visiting the RRSystems Blog, and we hope you find our content useful and engaging. Happy reading!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; RRSystems team &middot; &copy; 2023
  </footer>
</div>
<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
</body>
  )
}

export default AboutPage