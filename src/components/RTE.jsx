import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="block mb-2 font-semibold">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Editor
            apiKey="4n6izx3335s1m8fye1pe6p1d1z6xo9brohdg8jny0kbmg8k2"
            initialValue={defaultValue}
            value={field.value}
            onEditorChange={field.onChange}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount"
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
          />
        )}
      />
    </div>
  );
}