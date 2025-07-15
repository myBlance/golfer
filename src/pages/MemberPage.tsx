import { useParams } from 'react-router-dom';
import Navbar from '../component/Navbar';

const MembersPage = () => {
    const { id } = useParams();
    return (
        <div>
            <Navbar/>
            <h2>Members Page</h2>
            <p>Club ID: {id}</p>
        </div>
    );
};

export default MembersPage;
