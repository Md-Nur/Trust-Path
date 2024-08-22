import { Editor } from "@tinymce/tinymce-react";

export default function App({
  editorRef,
  initialValue,
}: {
  editorRef: any;
  initialValue?: string;
}) {

  console.log("initialValue", process.env.NEXT_PUBLIC_TINY_API_KEY);
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue || ""}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
