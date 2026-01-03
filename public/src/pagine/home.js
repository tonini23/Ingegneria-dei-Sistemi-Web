const Home = {
    template:
        `

        <main>
        <div class="row justify-content-center align-items-center text-center mb-5 mt-5">
          <div class="col-3">
          </div>
          <router-link to="/tutor">
            <button class="col-6 btn btn-danger btn-lg shadow-lg p-4 mb-5 btn-action">
              Vorrei dare una mano
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
              Vorrei ricevere aiuto
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
              Entra come guest
            </button>
          </router-link>
          <div class="col-3">
          </div>
        </div>
      </main>

    `
    
};

export default Home;