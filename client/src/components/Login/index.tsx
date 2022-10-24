import React from 'react'
import blogicon from '../../assets/blog.webp'
import { useNavigate} from 'react-router-dom'
const index = () => {
    const navigate = useNavigate();
    const navigateRegister = () =>{
        navigate('/register')
    }
  return (
    <section className="h-screen w-screen shadow-2xl shadow-teal-300 md:h-screen">
    <div className="mx-auto container py-12 px-6 h-full w-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
          <div className="block bg-white shadow-lg rounded-lg">
            <div className="lg:flex lg:flex-wrap g-0">
            <div
                className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                style={{ background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);"}}
              >
                <div className="w-full text-white px-4 py-6 md:p-12 md:mx-6">
                <div className="text-center my-5">
                    <img
                      className="mx-auto w-48"
                      src={blogicon}
                      alt="logo"
                    />
                    
                  </div>
                  <h4 className="text-xl text-center font-semibold mb-6 text-red-300">BLOGSTER</h4>
                  <p className="text-center text-sm text-slate-700">
                  A Site where you write and share your knowledge
                  </p>
                </div>
              </div>
              <div className="lg:w-6/12 px-4 md:px-0">
                
                <div className="md:p-12 md:mx-6">
                 
                  <form>
                    <p className="mb-4">Please login to your account</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                        className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        style={{
                          "background": "linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593)"
                        }}
                      >
                        Log in
                      </button>
                      <a className="text-gray-500" href="#!">Forgot password?</a>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                      <p className="mb-0 mr-2">Don't have an account?</p>
                      <button
                        type="button"
                        className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick = {navigateRegister}
                      >
                        
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default index