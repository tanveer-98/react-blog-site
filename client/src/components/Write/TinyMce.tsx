import React, { useRef } from 'react';
import {Editor} from '@tinymce/tinymce-react';
// import tinymce from 't'
export default function App() {
  const editorRef = useRef<any>(null);
  const log = () => {
    console.log(editorRef.current)
    if (editorRef.current!=null) {
      console.log(editorRef.current[0].getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_APIKEY}
        onInit={(evt, editor) =>  editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
       
        init={{

          // change this value according to your HTML
          image_title : true,
          automatic_uploads : true , 
          file_picker_types: 'image',
          file_picker_callback: function (cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
        
            /*
              Note: In modern browsers input[type="file"] is functional without
              even adding it to the DOM, but that might not be the case in some older
              or quirky browsers like IE, so you might want to add it to the DOM
              just in case, and visually hide it. And do not forget do remove it
              once you do not need it anymore.
            */
        
            input.onchange = function () {
              var file = this.files[0];
        
              var reader = new FileReader();
              reader.onload = function () {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                var id = 'blobid' + (new Date()).getTime();
                var blobCache =  tinymce.activeEditor.editorUpload.blobCache;
                var base64 = reader.result.split(',')[1];
                var blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
        
                /* call the callback and populate the Title field with the file name */
                cb(blobInfo.blobUri(), { title: file.name });
              };
              reader.readAsDataURL(file);
            };
        
            input.click();
          },


        
         
          height: 500,
          menubar: false,
          plugins: [
            'image code',
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help' + 'link image | code',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          
        
        }
    
       
    }
    onEditorChange={(newText) => {
        console.log(newText)
    }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}