import React from 'react';

const SourceCodes = () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="/assets/css/app.css" />
        <link rel="stylesheet" href="/assets/css/members.css" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <script defer src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css" />
        <title>Source Codes | Sharing Farm Intelligence</title>
        <meta name="generator" content="Jekyll v3.10.0" />
        <meta property="og:title" content="Source Codes" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content="A NFS-funded project." />
        <meta property="og:description" content="A NFS-funded project." />
        <link rel="canonical" href="http://cps-smartfarm.github.io/code/" />
        <meta property="og:url" content="http://cps-smartfarm.github.io/code/" />
        <meta property="og:site_name" content="Sharing Farm Intelligence" />
        <meta property="og:image" content="http://cps-smartfarm.github.io/images/smart-ag.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="http://cps-smartfarm.github.io/images/smart-ag.jpeg" />
        <meta property="twitter:title" content="Source Codes" />
      </head>

      <body>
        <nav className="navbar is-primary">
          <div className="container">
            <div className="navbar-brand">
              <img src="/assets/images/nsf.png" width="70" height="" alt="NSF Logo" />
              <a href="/" className="navbar-item">Sharing Farm Intelligence</a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                <a href="/" className="navbar-item">Home</a>
                <a href="/goals/" className="navbar-item">Goals</a>
                <a href="/members/" className="navbar-item">Members</a>
                <a href="/publications/" className="navbar-item">Publications</a>
                <a href="/outreach/" className="navbar-item">Outreach Activities</a>
                <a href="/code/" className="navbar-item is-active">Source Codes</a>
              </div>
            </div>
          </div>
        </nav>

        <section className="hero is-medium is-bold is-primary" style={{ background: "url('/images/smart-ag.jpeg') no-repeat center center", backgroundSize: 'cover' }}>
          <div className="hero-body page-image-background">
            <div className="background-overlay"></div>
            <div className="container">
              <h1 className="title is-2">Source Codes</h1>
              <p className="subtitle is-3">Sharing Farm Intelligence via Edge Computing</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12">
                <div className="content">
                  <h3>A Real-time Gaming Framework for IoT and Smart Agriculture Teaching</h3>
                  <p>The Real-time Gaming Framework for IoT and Smart Agriculture is an educational project that introduces the concepts of IoT, sensor integration, MQTT protocol, and real-time data visualization through an interactive game. For source code, visit this <a href="https://github.com/Shakoor-Lab-Organization/learn_ioat">GitHub link</a>.</p>
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
      </body>
    </>
  );
};

export default SourceCodes;
