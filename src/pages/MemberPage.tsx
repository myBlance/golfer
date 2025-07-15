import { useParams } from 'react-router-dom';

const MembersPage = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Members Page</h2>
            <p>Club ID: {id}</p>
        </div>
    );
};

export default MembersPage;
