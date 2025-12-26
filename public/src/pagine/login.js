const Login = {
    template:
        `

        <main>
            <div class="align-items-center text-center mt-5 mb-5">
                <h1 class="title-custom"> Accedi </h1>
            </div>

            <form action="/" class="align-items-center text-center mb-4">

                <div class="mb-4">
                    <label for="email" class="fw-bold label-custom">Email</label>
                    <input type="email" name="email" class="input-custom" required>
                </div>

                <div class="mb-4">
                    <label for="password" class="fw-bold label-custom">Password</label>
                    <input type="password" name="password" class="input-custom" required>
                </div>

                <div class="align-items-end text-end mb-3 me-4">
                    <a href="" class="text-decoration-none fst-italic">Password Dimenticata</a>
                </div>
                    <button class="col-4 btn btn-danger shadow-lg fw-bold p-1 btn-confirm">Accedi</button>
            </form>

            <div class="align-items-center text-center">
                <div class="align-items-center text-center mt-5 mb-4">
                    <h2 class="title-custom"> Non hai un account? </h2>
                </div>

                
                <button class="col-4 btn btn-lg btn-danger p-3 shadow-lg mb-3 btn-large">Registrati</button>
                <button class="col-4 btn btn-lg btn-danger p-3 shadow-lg mb-5 btn-large">Entra come guest</button>
            </div>
        </main>

    `
    
};

export default Login;