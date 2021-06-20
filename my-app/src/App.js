import './Styles.css';
import { Button } from "./components/atoms/Button"

export default function App() {
  const handleClick = () => {
    console.log("クリックしたよ");
  };
  return (
    <>
    <Button
       width={100}
       height={200}
       backgroundColor={"red"}
       onClick={"handleClick"}
       name={"更新"}
      />
  <Button
       width={100}
       height={200}
       backgroundColor={"red"}
       onClick={"handleClick"}
       name={"更新"}
      />
  <Button
      width={100}
      height={200}
      backgroundColor={"red"}
      onClick={"handleClick"}
      name={"更新"}
     />
     </>
     );
  }