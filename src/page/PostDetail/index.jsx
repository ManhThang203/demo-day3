import fakeData from "./fakeData";

export function PostDetail() {
  return (
    <div>
      <h1>Post-Detail</h1>

      {/* Content */}
      <div
        dangerouslySetInnerHTML={{
          __html: fakeData,
        }}
      ></div>
    </div>
  );
}
export default PostDetail;
