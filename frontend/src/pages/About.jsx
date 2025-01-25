import { useSelector } from "react-redux";


export default function About() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={` ${darkMode ? 'bg-slate-900' : ""} decoration-color duration-300 `}>About</div>
  )
}
