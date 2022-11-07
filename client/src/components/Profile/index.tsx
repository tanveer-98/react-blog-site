import React,{useState} from 'react'
import {register, updateUserProfile,getBookingUploadSign} from '../../services/service'
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    useField,
    useFormikContext,
  } from "formik";
  import {FiSend} from 'react-icons/fi'
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PasswordShowHide from '../PasswordShowHide';
import { useAppDispatch } from '../../store';
import { updateProfile } from '../../store/blog/blogSlice';
  const styles = {
    label: "block text-gray-700 text-sm font-bold pt-2 pb-1",
    field:
      "bg-gray-100 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none focus:bg-gray-200",
    button:
      " bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600",
    errorMsg: "text-red-500 text-sm",
    textarea:
      "bg-gray-100 w-[300px] sm:w-[600px] lg:w-[800px] focus:shadow-outline rounded block w-full appearance-none focus:bg-gray-200 p-5",
  };
const index = () => {
  const dispatch = useDispatch();
  const [bookingUploadedFilename, setBookingUploadedFilename] = useState("");
  const [bookingUploadedFilenamePublic, setBookingUploadedFilenamePublic] = useState("");

    const navigate = useNavigate()
    const redirectLogin = () =>{
        navigate('/login')
    }
    const formInitialValues = {
        fName: window.localStorage.getItem('user')?.split(' ')[0],
        lName: window.localStorage.getItem('user')?.split(' ')[1],
        email: window.sessionStorage.getItem('email'),
        profileurl:window.sessionStorage.getItem('profileurl')
      };

      const cloudName = `${import.meta.env.VITE_CLOUD_NAME}`; // replace with your own cloud name
  const uploadPreset = "profile"; // replace with your own upload preset
  const api_key = import.meta.env.VITE_CLOUDINARY_API_KEY;

  const BookingUpload = async () => {
    const res = await getBookingUploadSign();
    // console.log(res);
    var myWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        uploadSignatureTimestamp: res.data.timestamp,
        uploadSignature: res.data.signature,
        cropping: false,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        multiple: false, //restrict upload to a single file
        // folder: "career_attachments", //upload files to the specified folder
        tags: ["profile"], //add the given tags to the uploaded files
        apiKey: api_key,

        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        theme: "purple", //change to a purple theme
        styles: {
          palette: {
            window: "#F5F5F5",
            sourceBg: "#FFFFFF",
            windowBorder: "#90a0b3",
            tabIcon: "#0094c7",
            inactiveTabIcon: "#69778A",
            menuIcons: "#0094C7",
            link: "#53ad9d",
            action: "#8F5DA5",
            inProgress: "#0194c7",
            complete: "#53ad9d",
            error: "#c43737",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
            "'Poppins', sans-serif": {
              url: "https://fonts.googleapis.com/css?family=Poppins",
              active: true,
            },
          },
        },
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the file info: ", result.info);
          setBookingUploadedFilename(result.info.secure_url);
          setBookingUploadedFilenamePublic(result.info.public_id);
          alert('file upload successfull')
        }
      }
    );
    //myWidget.open();
  };
  return (
    <div className="pt-[100px] flex justify-center items-center mx-auto max-w-[400px] h-screen sm:max-w-[600px] md:sm:max-w-[600px] transition-all ease-in duration-200">

<div className="flex justify-center items-center w-full h-screen">
<div className="flex flex-col p-6 justify-around  rounded-lg shadow-lg bg-white max-w-md">

 <Formik
        initialValues={formInitialValues}
        validate={(values) => {
          const errors: any = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          const requiredData = {
            name : values.fName!.concat(" ",values.lName!),
            email : values.email,
            profileurl:bookingUploadedFilename
          }
          console.log(requiredData)
          updateUserProfile(requiredData)
          .then(()=>{
            alert('successfully updated profile')
          })
          .catch((err)=>{
            alert('Unsuccessful update'+ (err as Error).message)
          })
          resetForm();
        }}
      >
        {({
          values,
          isSubmitting,
          isValid,
          errors,
          touched,
          setFieldValue,
          
       
        }) => (
          <div className="w-full flex justify-center my-10">
            <Form className=" form-training w-[300px] sm:w-[600px] lg:w-[800px]" >
              <div className="form-group row py-sm-1 px-sm-3">
                <label className={styles.label} htmlFor="fName">
                  First Name{errors.fName?<span className={styles.errorMsg}>*</span>:""}
                </label>
                <Field
                  className={`${styles.field} ${
                    touched.fName && errors.fName ? "is-invalid" : ""
                  }`}
                  type="text"
                  name="fName"
                  placeholder="First Name"
                />
                <ErrorMessage
                  name="fName"
                  component="span"
                  className={styles.errorMsg}
                />
              </div>
              <div className="form-group row py-sm-1 px-sm-3">
                <label className={styles.label} htmlFor="lName">
                  Last Name{errors.lName?<span className={styles.errorMsg}>*</span>:""}
                </label>
                <Field
                  className={`${styles.field} ${
                    touched.lName && errors.lName ? "is-invalid" : ""
                  }`}
                  type="text"
                  name="lName"
                  placeholder="Last Name"
                />
                <ErrorMessage
                  name="lName"
                  component="span"
                  className={styles.errorMsg}
                />
              </div>
              <div className="form-group row py-sm-2 px-sm-3">
                <label className={styles.label} htmlFor="email">
                  Email{errors.email?<span className={styles.errorMsg}>*</span>:""}
                </label>
                <Field
                  className={`${styles.field} ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                  type="text"
                  name="email"
                  placeholder="Email"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.errorMsg}
                />
              </div>
              <div className="form-group row py-sm-2  pb-5 px-sm-3">
                <label className={styles.label} htmlFor="email">

                  Upload Profile Pic
                </label>
                <Field
                  className={`${styles.field} ${
                    touched.fName && errors.fName ? "is-invalid" : ""
                  }`}
                  type="text"
                  name="profileurl"
                  value={bookingUploadedFilename}
                  disabled
                />
                <button
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => {
                    e.preventDefault();
                    BookingUpload();
                  }}
                  type="submit"
                  className="px-6
                  py-2.5
                  bg-orange-400
                  text-white
                  font-medium
                  text-xs
                  mt-4
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-orange-600 hover:shadow-lg
                  focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-orange-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
              
                  style={{
                    color: "white",
                  }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <div className="flex gap-2 ">
                  UPLOAD
                  
                 </div>
                    
                </button>
                {/* {bookingUploadedFilename!=''?<span className=" overflow-x-auto max-w-[400px] h-full">{bookingUploadedFilename}</span>:""} */}
                 
              </div>
              
                
         
              <div className=" flex justify-center flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="submit"
                  className="px-6
                  py-2.5
                  bg-orange-400
                  text-white
                  font-medium
                  text-xs
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-orange-600 hover:shadow-lg
                  focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-orange-700 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out
                  ml-1"
                  disabled={isSubmitting}
                  style={{
                    color: "white",
                  }}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                 <div className="flex gap-2">
                 UPDATE<FiSend />
                  
                 </div>
                    
                </button>
                
              </div>
            </Form>
            
          </div>
        )}
      </Formik>
      {/* <span>Already Have an Account ? <button className="bg-transparent text-orange-400 hover:cursor-pointer hover:text-orange-600 " onClick={redirectLogin} >Login</button> </span> */}
</div>
  </div>
  

      
    </div>
  )
}

export default index