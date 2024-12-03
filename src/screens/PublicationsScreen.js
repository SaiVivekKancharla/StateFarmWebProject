function loadPublicationsPage() {
    const publicationsHTML = `
      <!DOCTYPE html>
      <html dir="ltr" lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta name="theme-color" content="#ffffff">
          <link rel="stylesheet" href="/assets/css/app.css">
          <link rel="stylesheet" href="/assets/css/members.css">
          <link rel="shortcut icon" type="image/png" href="/favicon.png" />
          <script defer src="https://unpkg.com/alpinejs@3.9.0/dist/cdn.min.js"></script>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5/css/all.min.css">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-social@1/bin/bulma-social.min.css">
          <title>Publications | Sharing Farm Intelligence</title>
          <meta name="generator" content="Jekyll v3.10.0" />
          <meta property="og:title" content="Publications" />
          <meta property="og:locale" content="en_US" />
          <meta name="description" content="A NFS-funded project." />
          <meta property="og:description" content="A NFS-funded project." />
          <link rel="canonical" href="http://cps-smartfarm.github.io/publications/" />
          <meta property="og:url" content="http://cps-smartfarm.github.io/publications/" />
          <meta property="og:site_name" content="Sharing Farm Intelligence" />
          <meta property="og:image" content="http://cps-smartfarm.github.io/images/smart-ag.jpeg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:image" content="http://cps-smartfarm.github.io/images/smart-ag.jpeg" />
          <meta property="twitter:title" content="Publications" />
          <script type="application/ld+json">
            {
              "@context":"https://schema.org",
              "@type":"WebPage",
              "description":"A NFS-funded project.",
              "headline":"Publications",
              "image":"http://cps-smartfarm.github.io/images/smart-ag.jpeg",
              "url":"http://cps-smartfarm.github.io/publications/"
            }
          </script>
        </head>
        <body>
          <nav class="navbar is-primary" x-data="{ openNav: false }">
            <div class="container">
              <div class="navbar-brand">
                <img src="/assets/images/nsf.png" width="70" height="">
                <a href="/" class="navbar-item">Sharing Farm Intelligence</a>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu" :class="{ 'is-active': openNav }" x-on:click="openNav = !openNav">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div class="navbar-menu" id="navMenu" :class="{ 'is-active': openNav }">
                <div class="navbar-start">
                  <a href="/" class="navbar-item">Home</a>
                  <a href="/goals/" class="navbar-item">Goals</a>
                  <a href="/members/" class="navbar-item">Members</a>
                  <a href="/publications/" class="navbar-item is-active">Publications</a>
                  <a href="/outreach/" class="navbar-item">Outreach Activities</a>
                  <a href="/code/" class="navbar-item">Source Codes</a>
                </div>
              </div>
            </div>
          </nav>
          
          <section class="hero is-medium is-bold is-primary">
            <div class="hero-body page-image-background" style="background: url('/images/smart-ag.jpeg') no-repeat center center; background-size: cover;">
              <div class="background-overlay"></div>
              <div class="container">
                <h1 class="title is-2">Publications</h1>
                <p class="subtitle is-3">Papers published from our research activities</p>
              </div>
            </div>
          </section>
  
          <section class="section">
            <div class="container">
              <div class="columns is-multiline">
                <div class="column is-12">
                  <div class="content">
                    <ul>
                      <li>2024</li>
                      <ul>
                        <li class="publication">Emilio Paolini et al. Efficient distributed learning over lossy wireless networks. (to appear)</li>
                        <!-- Add other publications here following the same structure -->
                      </ul>
                      <li>2023</li>
                      <ul>
                        <li class="publication">Yang, D. et al. IoT Sentinel: Correlation-based Attack Detection, Localization, and Authentication in IoT Networks.</li>
                        <!-- Add other publications here following the same structure -->
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <footer class="footer">
            <div class="container">
              <div class="content is-small has-text-centered">
                <p>Developed by <a href="https://felipealencar.github.io">felipealencar</a></p>
                <p>Theme built by <a href="https://www.csrhymes.com">C.S. Rhymes</a></p>
              </div>
            </div>
          </footer>
  
          <script src="/assets/js/app.js" type="text/javascript"></script>
        </body>
      </html>
    `;
  
    // Inject into a specified element (e.g., a div with id 'app')
    document.getElementById('app').innerHTML = publicationsHTML;
  }
  
  // Call the function to load the HTML when needed
  loadPublicationsPage();
  