import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';

const RankingPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar/>
            <h2>Ranking Page</h2>
            <p>Club ID: {id}</p>
        </div>
    );
};

export default RankingPage;
