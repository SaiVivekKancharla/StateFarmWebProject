import React from 'react';

const OutreachActivities = () => {
  return (
    <div dir="ltr" lang="en">
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="stylesheet" href="/assets/css/app.css" />
      <link rel="stylesheet" href="/assets/css/members.css" />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <script defer src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css"
      />

      <title>Outreach Activities | Sharing Farm Intelligence</title>

      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <img src="/assets/images/nsf.png" width="70" alt="NSF Logo" />
            <a href="/" className="navbar-item">
              Sharing Farm Intelligence
            </a>
            <button className="navbar-burger" aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <a href="/" className="navbar-item">Home</a>
              <a href="/goals/" className="navbar-item">Goals</a>
              <a href="/members/" className="navbar-item">Members</a>
              <a href="/publications/" className="navbar-item">Publications</a>
              <a href="/outreach/" className="navbar-item is-active">Outreach Activities</a>
              <a href="/code/" className="navbar-item">Source Codes</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero is-medium is-bold is-primary">
        <div
          className="hero-body page-image-background"
          style={{
            background: "url('/images/smart-ag.jpeg') no-repeat center center",
            backgroundSize: 'cover'
          }}
        >
          <div className="background-overlay"></div>
          <div className="container">
            <h1 className="title is-2">Outreach Activities</h1>
            <p className="subtitle is-3">Sharing Farm Intelligence via Edge Computing</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12">
              <div className="content">
                <div className="columns">
                  <div className="column is-two-thirds">
                    <div className="text">
                      <p>
                        Our commitment to community engagement and educational outreach is a vital part of our mission. 
                        In Spring 2023, we actively participated in multiple rounds of iSCORE on the SLU campus, a program dedicated to expanding STEM 
                        education for PreK-12 and K-12 students, all thanks to the visionary leadership of Dr. Christa Jackson.
                      </p>
                      <p>
                        Furthermore, from March to August, one of our postdoctoral fellows provided valuable mentorship to three members of the 
                        Remote Sensing Laboratory – a master's student, a PhD student, and a postdoctoral researcher. 
                      </p>
                    </div>
                  </div>
                  <div className="column is-one-third">
                    <img
                      src="../assets/images/gallery/iscore1.jpg"
                      style={{ maxWidth: '100%' }}
                      alt="Kid playing with the FarmApp"
                    />
                  </div>
                </div>
                {/* Additional columns and images here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="content is-small has-text-centered">
            <p>Developed by <a href="https://felipealencar.github.io">felipealencar</a></p>
            <p>Theme built by <a href="https://www.csrhymes.com">C.S. Rhymes</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OutreachActivities;
