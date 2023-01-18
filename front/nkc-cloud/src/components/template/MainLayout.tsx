import { TTsxChild } from "../../util/tsType";

const MainLayout:React.FC<TTsxChild> = (props) => {
    return(
        <>
            {props.children}  
        </>
    )
}

export default MainLayout;