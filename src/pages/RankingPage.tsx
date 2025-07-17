import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';

const RankingPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar/>
            <h2>Bảng xếp hạng thành viên {id}</h2>
            <p>Bảng xếp hạng dựa trên thành tích và số điểm tích lũy</p>
        </div>
    );
};

export default RankingPage;
