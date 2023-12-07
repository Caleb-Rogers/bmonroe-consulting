import React, { useEffect } from "react";

export default function Testimonials() {

  useEffect(() => {
    $(document).ready(function(){
      $('.test-row').owlCarousel({
        loop:true,
        margin:50,
        nav:true,
        dots:true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
      })
    });
  }, []);

  return (
    <section className="test-sec">
      <div className="test-heading">
        <h2>Testimonials: What Past Clients Have Said</h2>
      </div>
      <div className="test-container">
        <div className="test-row owl-carousel">
          <div className="test-col">
            <p>
              We highly recommend Barb Monroe and Monroe Consulting to anyone to build a new structure, renovate an existing structure,
              or help coordinating projects and navigating the permitting and codes process. Barb's expertise is exceptional, and is
              responsive to needs of her customers. Barb Monroe helped us through a challenging issue and her professionalism and focus
              was what helped us get through it.
            </p>
            <div className="test-content">
              <div className="test-img">
                <a href="#">
                  <img src="test-img-1.png"></img>
                </a>
              </div>
              <div className="test-details">
                <h3>Joe & Pam Stagliano</h3>
                <span>Stagliano Inc.</span>
              </div>
            </div>
          </div>
          <div className="test-col">
            <p>
              Barb Monroe and Monroe Consulting were instrumental in the success of our building project. From the initial planning stages to 
              navigating the intricacies of permits and codes, Barb's expertise was evident every step of the way. She provided invaluable 
              insights, kept the project on track, and demonstrated a commitment to excellence that is truly commendable...
            </p>
            <div className="test-content">
              <div className="test-img">
                <a href="#">
                  <img src="test-img-2.png"></img>
                </a>
              </div>
              <div className="test-details">
                <h3>First Last</h3>
                <span>Random, LLC.</span>
              </div>
            </div>
          </div>
          <div className="test-col">
            <p>
              We had the pleasure of working with Barb Monroe on our recent construction project, and we cannot recommend her highly enough. 
              Barb's knowledge of construction project management is unmatched, and her ability to navigate the complexities of permits and 
              codes made the entire process seamless...
            </p>
            <div className="test-content">
              <div className="test-img">
                <a href="#">
                  <img src="test-img-3.png"></img>
                </a>
              </div>
              <div className="test-details">
                <h3>First Last</h3>
                <span>Random, LLC.</span>
              </div>
            </div>
          </div>
          <div className="test-col">
            <p>
              Choosing Barb Monroe for our construction project was one of the best decisions we made. Barb's extensive knowledge of project management, 
              coupled with her attention to detail, proved to be invaluable throughout the entire process. She skillfully guided us through the complexities 
              of permits and codes, ensuring a smooth and efficient project timeline...
            </p>
            <div className="test-content">
              <div className="test-img">
                <a href="#">
                  <img src="test-img-4.png"></img>
                </a>
              </div>
              <div className="test-details">
                <h3>First Last</h3>
                <span>Random, LLC.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.js"
              integrity="sha512-+k1pnlgt4F1H8L7t3z95o3/KO+o78INEcXTbnoJQ/F2VqDVhWoaiVml/OEHv9HsVgxUaVW+IbiZPUJQfF/YxZw=="
              crossorigin="anonymous" referrerpolicy="no-referrer">
      </script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.js"
              integrity="sha512-gY25nC63ddE0LcLPhxUJGFxa2GoIyA5FLym4UJqHDEMHjp8RET6Zn/SHo1sltt3WuVtqfyxECP38/daUc/WVEA=="
              crossorigin="anonymous" referrerpolicy="no-referrer">
      </script>
    </section>
  );
};