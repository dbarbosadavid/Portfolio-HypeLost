import InicialPage from "../components/layout/InicialPage"
import Nav from "../components/layout/Nav"
import WorksBody from "../components/layout/WorksBody"

const MainPage: React.FC = () => {
    return (
        <>
            <Nav />
            <InicialPage />
            <WorksBody />
        </>
    )
}

export default MainPage