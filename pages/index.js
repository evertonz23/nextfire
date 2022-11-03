import toast from "react-hot-toast";

export default function HomePage() {
  return (
    <div>
      <button onClick={() => toast.success("hello toast!")}>Toast Me</button>
    </div>
  );
}
