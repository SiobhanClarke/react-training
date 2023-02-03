import { Title } from "./components/Title";
import { Repos } from "./components/Repos";


export const App = () => {
    return (
        <div>
            <Title title="GitHub Directory" subTitle="A list of all your GitHub repositories"/>
            <Repos />
        </div>
    );
};
