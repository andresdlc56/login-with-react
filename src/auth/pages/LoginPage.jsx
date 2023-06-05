import { LoginForm } from "../components";

export const LoginPage = () => {
    return (
        <section className="h-100">
            <div className="container h-100">
                <div className="row justify-content-sm-center h-100">
                    <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                        <div className="text-center my-5">
                            <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="logo" width="100" />
                        </div>
                        
                        <LoginForm />

                        <div className="text-center mt-5 text-muted">
                            Copyright &copy; 2017-2021 &mdash; Your Company 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
