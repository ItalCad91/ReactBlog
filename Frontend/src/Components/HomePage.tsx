
function HomePage() {
  return (
<body>   

<main className="container">
  <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div className="col-lg-6 px-0">
      <h1 className="display-4 fst-italic">The Developer Journey: A Programmer's Blog</h1>
      <p className="lead my-3">Sharing experiences, challenges, and insights on the exciting path of software development.</p>
      <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
    </div>
  </div>

  <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary-emphasis">Learning how to Code</strong>
          <h3 className="mb-0">A Day in the Life of a Developer Student</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">Join us on a journey through a typical day of a programmer and explore the challenges and joys of the coding world.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="200" height="250" src="./public/web-study.png" alt="web-friendly" />
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success-emphasis">Web Development</strong>
          <h3 className="mb-0">Building User-Friendly Websites</h3>
          <div className="mb-1 text-body-secondary">Nov 11</div>
          <p className="mb-auto">How I learnt the essential elements of creating user-friendly websites and how to enhance the user experience.</p>
          <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading
          </a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img" width="200" height="250" src="./public/web.png" alt="web-friendly" />
        </div>
      </div>
    </div>
  </div>

  <div className="row g-5">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the hands-on experience of a developer!
      </h3>

      <article className="blog-post">
        <h2 className="display-5 link-body-emphasis mb-1">Mastering Programming Languages: Tips and Tricks</h2>
        <p className="blog-post-meta">December 23, 2022 by <a href="#">RRSystems</a></p>

        <p>This blog post delves into the journey of mastering programming languages. Discover valuable tips and tricks to enhance your programming skills and become a more efficient developer.</p>
        <hr/>
        <p>Embark on a learning adventure and explore the various programming languages, their unique features, and the best practices to write clean and maintainable code.</p>
        <h2>The Power of Open Source</h2>
        <p>Discover the world of open-source software and how contributing to open-source projects can shape your career as a programmer. Learn about the benefits, challenges, and rewards of being part of the open-source community.</p>
        <blockquote className="blockquote">
          <p>“The best way to learn is to teach. The best way to teach is to create.” - Open Source Proverb</p>
        </blockquote>
        <p>Unleash your creativity and collaborate with like-minded developers to build amazing software that makes a difference.</p>
        <h3>Building Personal Projects</h3>
        <p>Find inspiration and guidance on how to start and manage your personal projects. Learn how to transform your ideas into fully functional applications, sharpen your problem-solving skills, and overcome common hurdles along the way.</p>
        <ol>
          <li>Youtube</li>
          <li>Open source GitHub project</li>
          <li>freecodecamp.org</li>        
          <li>W3Schools</li>
          <li>Official DOcumentation</li>
        </ol>
        <p>Knowledge included in the list above:</p>
        <dl>
          <dt>Front End and Back End web development</dt>
          <dd>HTML - CSS - JavaScript - TypeScript - Frameworks (NodeJs, Angular, etc) and more.</dd>
          <dt>Databases</dt>
          <dd>MongoDB - SQL - MySQL</dd>
          <dt>.NET</dt>
          <dd>C# - WPF - Visual Studio turorials and more.</dd>
        </dl>
        </article>
        <hr/>
        <article className="blog-post">
          <h2 className="display-5 link-body-emphasis mb-1">Code Review: A Path to Excellence</h2>
          <p className="blog-post-meta">January 1, 2021 by <a href="#">RRSystems</a></p>

          <p>Discover the significance of code reviews in the software development process. Explore effective code review practices and strategies to improve code quality, enhance collaboration, and foster a culture of continuous improvement within your development team.</p>
          <blockquote>
            <p>“Code review is not just about finding defects; it's about improving the team and the codebase.”</p>
          </blockquote>
          <hr/>
          <p>Learn how to provide constructive feedback, conduct thorough code inspections, and create a positive and supportive environment for code reviews.</p>
          <h3>Embracing New Technologies</h3>
          <p>Stay ahead of the curve by exploring emerging technologies and trends in the ever-evolving world of software development. Dive into topics like artificial intelligence, cloud computing, and blockchain to understand their potential impact on the industry and how you can adapt and leverage them in your projects.</p>
          <p>Embracing new technologies opens doors to exciting opportunities and keeps your skills relevant in the dynamic field of software development. </p>
          <h2>Problem Solving: A Developer's Superpower</h2>
          <p>Discover the art of problem solving and its crucial role in the life of a programmer. Gain insights into effective problem-solving techniques, such as breaking down complex problems, analyzing requirements, and devising efficient solutions.</p>
          <p>Learn how to approach challenges with a structured mindset, think critically, and leverage your problem-solving skills to overcome obstacles and deliver high-quality software.</p>
          <h3>The Importance of Continuous Learning</h3>
          <p>Explore the concept of lifelong learning in the context of software development. Understand the necessity of staying updated with the latest industry trends, technologies, and best practices.</p>
          <p>Discover various resources, such as online courses, tutorials, and coding communities, that can help you expand your knowledge and improve your skills continuously.</p>
          <h2>Embracing the Agile Mindset</h2>
          <p>Learn about the principles and values of Agile methodology and how they can revolutionize the way you approach software development projects.</p>
          <p>Discover the benefits of iterative development, frequent collaboration with stakeholders, and adaptability in the face of changing requirements.</p>
          <h3>The Thrill of Debugging</h3>
          <p>Delve into the world of debugging and uncover the strategies and tools that can help you identify and fix software defects efficiently.</p>
          <p>Explore techniques like stepping through code, using breakpoints, and leveraging debugging tools to gain insights into the behavior of your applications and resolve issues effectively.</p>
          </article>
       <hr/>
    </div>

    <div className="col-md-4">
      <div className="position-sticky" style={{top: "2rem"}}>
        <div className="p-4 mb-3 bg-body-tertiary rounded">
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">Welcome to RRSystem's blog! I'm a passionate programmer sharing my journey, insights, and experiences in the world of software development. Join me as I explore the endless possibilities of coding.</p>
        </div>

        <div>
          <h4 className="fst-italic">Recent posts</h4>
          <ul className="list-unstyled">
            <li>
              <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                <img className="bd-placeholder-img" width="100%" height="96" src="./public/languages.jpg" alt="web-friendly" aria-hidden="true"/>                
                <div className="col-lg-8">
                  <h6 className="mb-0">Mastering Programming Languages</h6>
                  <small className="text-body-secondary">December 23, 2022</small>
                </div>
              </a>
            </li>     
            <li>
              <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
              <img className="bd-placeholder-img" width="130" height="96" src="./public/review.png" alt="web-friendly" aria-hidden="true"/>                
                <div className="col-lg-8">
                  <h6 className="mb-0">Code Review</h6>
                  <small className="text-body-secondary">January 1, 2021</small>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Archives</h4>
          <h1 className="list-unstyled mb-0">Coming Soon</h1>          
        </div>

        <div className="p-4">
          <h4 className="fst-italic">Elsewhere</h4>
          <ol className="list-unstyled">
          <li><a href="https://github.com/">GitHub</a></li>
          <li><a href="https://twitter.com/">Twitter</a></li>
          <li><a href="https://facebook.com/">Facebook</a></li>
          </ol>
        </div>
      </div>
    </div>
  </div>

</main>

<footer className="py-5 text-center text-body-secondary bg-body-tertiary">
  <p>RRSystems Blog &middot; &copy; 2023</p>
  <p className="mb-0">
    <a href="#" style={{textDecoration:"none"}}>Back to top</a>
  </p>
</footer>
<script src="../assets/dist/js/bootstrap.bundle.min.js"></script>

    </body>


  )
}

export default HomePage