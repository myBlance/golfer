import { useParams } from 'react-router-dom';

const RankingPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Ranking Page</h2>
            <p>Club ID: {id}</p>
        </div>
    );
};

export default RankingPage;
