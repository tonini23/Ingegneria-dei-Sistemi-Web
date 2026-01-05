const Home = {
    template:
        `

        <main>
        <div class="d-lg-none">
          <div class="row justify-content-center align-items-center text-center mb-5 mt-5">
            <div class="col-3">
            </div>
            <router-link to="/tutor">
              <button class="col-6 btn btn-danger btn-lg shadow-lg p-4 mb-5 btn-action">
                Vorrei dare<br>una mano
              </button>
            </router-link>
            <div class="col-3">
            </div>
          </div>
          <div class="row justify-content-center align-items-center text-center mb-5">
            <div class="col-3">
            </div>
            <router-link to="/studente">
              <button class="col-6 btn btn-danger btn-lg shadow-lg p-4 mb-5 btn-action">
                Vorrei<br>ricevere aiuto
              </button>
            </router-link>
            <div class="col-3">
            </div>
          </div>
          <div class="row justify-content-center align-items-center text-center mb-5">
            <div class="col-3">
            </div>
            <router-link to="/studente">
              <button class="col-6 btn btn-danger btn-lg shadow-lg p-4 mb-5 btn-action">
                Entra<br>come guest
              </button>
            </router-link>
            <div class="col-3">
            </div>
          </div>
        </div>
        <div class="justify-content-center align-items-center text-center mb-5 mt-5 d-none d-lg-block">
          <div class="col-1"> </div>
          <router-link to="/tutor">
            <button class="col-3 btn btn-danger btn-lg shadow-lg p-5 mb-5 me-5 btn-action" style="height: 300px;">
              Vorrei dare<br>una mano
            </button>
          </router-link>
          <router-link to="/studente">
            <button class="col-3 btn btn-danger btn-lg shadow-lg p-5 mb-5 mx-5 btn-action">
              Vorrei<br>ricevere aiuto
            </button>
          </router-link>
          <router-link to="/studente">
            <button class="col-3 btn btn-danger btn-lg shadow-lg p-5 mb-5 ms-5 btn-action">
              Entra<br>come guest
            </button>
          </router-link>
          <div class="col-1">
          </div>
        </div>

      </main>



    `
    
};

export default Home;