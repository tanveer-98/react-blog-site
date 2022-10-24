import {
    useField,
} from "formik";

export const MyTextArea = ({ label, ...props }:any) => {
    const [field, meta] = useField(props);
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
      
    return (
      <>
        <label className={styles.label} htmlFor={props.id || props.name}>
          {label}
          <span className={styles.errorMsg}>*</span>
        </label>
        <textarea
          className="w-[400px] sm:w-[600px] lg:w-[800px]"
          {...field}
          {...props}
        ></textarea>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };